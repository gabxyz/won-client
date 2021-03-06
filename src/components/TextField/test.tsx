import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import { Email } from '@styled-icons/material-outlined'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="TextFieldLabel" name="Label" />)

    expect(screen.getByLabelText('TextFieldLabel')).toBeInTheDocument()
  })

  it('should without a label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('testLabel')).not.toBeInTheDocument()
  })

  it('should render with a placeholder', () => {
    render(<TextField placeholder="testing placeholder" />)

    expect(
      screen.getByPlaceholderText('testing placeholder')
    ).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should render with the error message', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="test error message"
      />
    )

    expect(screen.getByText('test error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change the value when typing', async () => {
    const onInputChange = jest.fn()

    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const mockText = 'This is the mock text for tests'

    userEvent.type(input, mockText)

    await waitFor(() => {
      expect(input).toHaveValue(mockText)
      expect(onInputChange).toHaveBeenCalledTimes(mockText.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(mockText)
  })

  it('should not change input value when disabled', async () => {
    const onInputChange = jest.fn()

    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'Test for the input text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should be accessible with tab', () => {
    render(<TextField label="TextField" name="TextField" />)
    const input = screen.getByRole('textbox')

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not be accessible with tab when disabled', () => {
    render(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
