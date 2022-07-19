import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render CartIcon and its badge', () => {
    render(<CartDropdown items={items} total="$65.00" />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 }
    })

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(3)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown items={items} total="$65.00" />)

    expect(screen.getByText('$65.00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
