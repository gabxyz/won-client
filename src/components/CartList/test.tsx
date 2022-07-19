import { render, screen } from 'utils/test-utils'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(<CartList items={mockItems} total="$65.00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('$65.00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} hasButton />)
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
