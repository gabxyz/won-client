import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import theme from 'styles/theme'
import Radio from '.'

describe('<Radio />', () => {
  it('should render with white label', () => {
    const { container } = render(
      <Radio label="radio" labelFor="radioCheck" value="testVal" />
    )

    const label = screen.getByText('radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.colors.white
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without a label', () => {
    render(<Radio />)

    expect(screen.queryByLabelText('testRadio')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(<Radio label="radio label" labelFor="radio" labelColor="black" />)

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Radio label="Radio" labelFor="Radio" value="testVal" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('testVal')
  })

  it('should be accessible with tab', () => {
    render(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
