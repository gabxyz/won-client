import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game Title',
  description: 'Game Description',
  price: '220.00'
}

describe('<GameInfo />', () => {
  it('should render game infos', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/220.00/i)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
