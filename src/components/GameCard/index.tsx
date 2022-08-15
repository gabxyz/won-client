import Link from 'next/link'
import formatPrice from 'utils/format-price'

import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number | null
  basePrice?: number | null
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  basePrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => {
  if (price === 0) {
    ribbon = 'FREE'
  }
  if (price === null) {
    ribbon = 'Coming Soon'
    ribbonColor = 'secondary'
  }
  if (basePrice) {
    const discount = Math.floor(((basePrice - price!) / basePrice) * 100)
    ribbon = `${discount}% OFF`
  }

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton>
          <WishlistButton id={id} />
        </S.FavButton>
        <S.BuyBox role="price">
          {!!basePrice && (
            <S.Price isPromotional>{formatPrice(basePrice)}</S.Price>
          )}
          {!!price && (
            <>
              <S.Price>{formatPrice(price)}</S.Price>

              <CartButton id={id} />
            </>
          )}
          {price === 0 && <CartButton id={id} hasText />}
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
