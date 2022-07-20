import formatPrice from 'utils/format-price'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

import { FavoriteBorder } from '@styled-icons/material-outlined'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
  basePrice?: number
}

const GameInfo = ({
  id,
  title,
  description,
  basePrice,
  price
}: GameInfoProps) => (
  <S.Wrapper>
    <S.HeadWrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
      <S.PriceWrapper>
        {!!basePrice && <S.Promotional>{formatPrice(basePrice)}</S.Promotional>}
        <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
      </S.PriceWrapper>
    </S.HeadWrapper>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      {price !== null && <CartButton id={id} size="large" hasText />}
      <Button icon={<FavoriteBorder />} size="large" minimal={price !== null}>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
