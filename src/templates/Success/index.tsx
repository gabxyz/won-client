import Base from 'templates/Base'

import Showcase from 'components/Showcase'

import { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'

import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import Spinner from 'components/Spinner'
import { useLayoutEffect, useState } from 'react'
import { Done } from '@styled-icons/material-outlined'
import Link from 'next/link'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const [fakeLoading, setFakeLoading] = useState(true)

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setFakeLoading(false)
    }, 1300)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          {fakeLoading ? (
            <S.Loading>
              <Spinner size={60} />
            </S.Loading>
          ) : (
            <S.Success>
              <Done />
              <S.Details>
                <S.Title>Your purchase was successful!</S.Title>
                <S.Description>
                  We will shortly send you an email with the payment details of
                  your order. Your game is now available for download in your{' '}
                  <Link href="/profile/orders">
                    <a>Orders List</a>
                  </Link>
                  . Go have some fun!
                </S.Description>
              </S.Details>
            </S.Success>
          )}
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
