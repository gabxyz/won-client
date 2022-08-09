import Link from 'next/link'
import formatPrice from 'utils/format-price'

import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import * as S from './styles'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number | null
  basePrice?: number | null
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  basePrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
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
        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from whishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to wishlist" />
          )}
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
