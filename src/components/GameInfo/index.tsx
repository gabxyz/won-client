import * as S from './styles'
import Heading from 'components/Heading'
import Button from 'components/Button'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <S.Price>{price}</S.Price>
    <S.ButtonsWrapper>
      <Button icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
      <Button icon={<AddShoppingCart />}>Add to cart</Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
