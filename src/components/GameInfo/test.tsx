import 'session.mock'
import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'Game Title',
  description: 'Game Description',
  price: 45
}

describe('<GameInfo />', () => {
  it('should render game infos', () => {
    const { container } = render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$45\.00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render basePrice with a line-through when passed', () => {
    render(<GameInfo {...props} basePrice={60} />)

    expect(screen.getByText('$60.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$45.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render FREE ribbon when price is 0', () => {
    render(<GameInfo {...props} price={0} />)

    const ribbon = screen.getByText(/free/i)

    expect(ribbon).toBeInTheDocument()
  })

  it('should render Coming Soon ribbon when price is null', () => {
    render(<GameInfo {...props} price={null!} />)

    const ribbon = screen.getByText(/coming soon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toBeInTheDocument()
  })

  it('should render buttons', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
