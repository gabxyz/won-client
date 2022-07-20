import { useRouter } from 'next/router'
import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'

import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import GamesLoader from 'components/GamesLoader'

import * as S from './styles'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data)
    return (
      <S.Loader>
        <GamesLoader />
      </S.Loader>
    )

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover!.url}`}
                    basePrice={game.basePrice!}
                    price={game.price!}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.Loader>
                      <GamesLoader />
                    </S.Loader>
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games matching this filter"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
