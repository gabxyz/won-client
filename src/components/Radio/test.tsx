import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with white label', () => {
    const { container } = renderWithTheme(
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
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('testRadio')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Radio label="radio label" labelFor="radio" labelColor="black" />
    )

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
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
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
