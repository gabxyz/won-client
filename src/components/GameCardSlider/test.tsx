import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import items from './mock'
import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render with white arrows if color is passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
