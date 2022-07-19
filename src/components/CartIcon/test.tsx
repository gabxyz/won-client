import { render, screen } from 'utils/test-utils'
import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the cart icon without the badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the cart icon with the badge', () => {
    render(<CartIcon quantity={3} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })

  it('should render the cart icon with the badge only if quantity is a positive number', () => {
    render(<CartIcon quantity={-3} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-3/)).not.toBeInTheDocument()
  })
})
