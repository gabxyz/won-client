import { MockedProvider } from '@apollo/client/testing'
import apolloCache from 'utils/apolloCache'

import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks'

import Games from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render the sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/price/i)).toBeInTheDocument()

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render empty when no games were found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/We didn't find any games matching this filter/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith({
        pathname: '/games',
        query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
      })
    })
  })
})
