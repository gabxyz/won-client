import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list with total from the sum of the game prices', () => {
    const { container } = renderWithTheme(<CartList items={mockItems} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('$65.00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the cart list with total passed', () => {
    renderWithTheme(<CartList items={mockItems} total={85} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('$85.00')).toBeInTheDocument()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} hasButton />)
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
