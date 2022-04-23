import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />)
  })
})
