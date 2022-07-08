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
  basePrice?: number
}

const GameInfo = ({ title, description, basePrice, price }: GameInfoProps) => {
  const handlePrice = (price: number) => {
    if (price === 0) {
      return 'FREE'
    }
    if (price === null) {
      return 'Coming Soon'
    }

    return formatPrice(price)
  }

  return (
    <S.Wrapper>
      <S.HeadWrapper>
        <Heading color="black" lineBottom>
          {title}
        </Heading>
        <S.PriceWrapper>
          {!!basePrice && (
            <S.Promotional>{formatPrice(basePrice)}</S.Promotional>
          )}
          <Ribbon color="secondary">{handlePrice(price)}</Ribbon>
        </S.PriceWrapper>
      </S.HeadWrapper>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        {price !== null && (
          <Button icon={<AddShoppingCart />} size="large">
            Add to cart
          </Button>
        )}
        <Button icon={<FavoriteBorder />} size="large" minimal={price !== null}>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
