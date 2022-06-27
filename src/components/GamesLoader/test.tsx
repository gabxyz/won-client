import { render, screen } from '@testing-library/react'
import GamesLoader from '.'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<GamesLoader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
