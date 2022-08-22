import { useEffect, useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
import { createPaymentIntent } from 'utils/stripe/methods'
import { Session } from 'next-auth'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // calls api endpoint /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })
        // if freeGames is true, calls setFreeGames
        // for the free games flow
        if (data.freeGames) {
          setFreeGames(true)
          return
        }
        // if there's an error, calls setError
        if (data.error) {
          setError(data.error)
          return
        }
        // paymentIntent is valid, calls setClientSecret
        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        {freeGames ? (
          <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
        ) : (
          <CardElement
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: '14px'
                }
              }
            }}
            onChange={handleChange}
          />
        )}

        {error && (
          <S.Error>
            <ErrorOutline size={18} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={!freeGames && (disabled || !!error)}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
export default PaymentForm
