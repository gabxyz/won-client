import formatPrice from 'utils/format-price'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'

import * as S from './styles'
import WishlistButton from 'components/WishlistButton'

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
      {price !== null && <CartButton id={id} size="medium" hasText />}
      <WishlistButton
        id={id}
        hasText
        size="medium"
        minimal={price !== null}
      ></WishlistButton>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
