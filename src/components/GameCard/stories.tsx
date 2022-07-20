import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextData } from 'hooks/use-cart'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 45
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true
}

export const IsInCartFree: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
IsInCartFree.args = {
  price: 0,
  isInCart: () => true
}

export const IsFree: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

IsFree.args = {
  price: 0
}

export const IsPromotional: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

IsPromotional.args = {
  basePrice: 60
}

export const IsComingSoon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

IsComingSoon.args = {
  price: null!
}
