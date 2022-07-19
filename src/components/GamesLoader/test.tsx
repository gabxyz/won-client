import { render, screen } from 'utils/test-utils'
import GamesLoader from '.'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<GamesLoader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
