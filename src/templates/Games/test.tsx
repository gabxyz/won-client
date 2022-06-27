import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render the sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Pathfinder: Wrath of the Righteous - Mythic Edition',
                    slug: 'pathfinder-wrath-of-the-righteous-mythic-edition',
                    cover: {
                      url: '/uploads/pathfinder_wrath_of_the_righteous_mythic_edition_1d7f3dda3b.jpg'
                    },
                    developers: [{ name: 'Owlcat Games' }],
                    price: 296.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/Pathfinder/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
