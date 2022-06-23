import * as S from './styles'
import Heading from 'components/Heading'
import Button from 'components/Button'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  const handlePrice = (price: number) => {
    if (price === 0) {
      return 'FREE'
    }
    if (price === 482.49) {
      return 'Coming Soon'
    }

    return formatPrice(price)
  }

  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{handlePrice(price)}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        {price !== 482.49 && (
          <Button icon={<AddShoppingCart />} size="large">
            Add to cart
          </Button>
        )}
        <Button
          icon={<FavoriteBorder />}
          size="large"
          minimal={price !== 482.49}
        >
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
