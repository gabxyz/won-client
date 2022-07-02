import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game Title',
  description: 'Game Description',
  price: 220
}

describe('<GameInfo />', () => {
  it('should render game infos', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$220\.00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render basePrice with a line-through when passed', () => {
    renderWithTheme(<GameInfo {...props} basePrice={250} />)

    expect(screen.getByText('$250.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$220.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render FREE ribbon when price is 0', () => {
    renderWithTheme(<GameInfo {...props} price={0} />)

    const ribbon = screen.getByText(/free/i)

    expect(ribbon).toBeInTheDocument()
  })

  it('should render Coming Soon ribbon when price is null', () => {
    renderWithTheme(<GameInfo {...props} price={null!} />)

    const ribbon = screen.getByText(/coming soon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toBeInTheDocument()
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
