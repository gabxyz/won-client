import 'session.mock'
import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Showcase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render with all elements', () => {
    render(<Showcase {...props} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })
  })

  it('should render without title', () => {
    render(<Showcase highlight={props.highlight} games={props.games} />)

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<Showcase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<Showcase title={props.title} highlight={props.highlight} />)
    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
