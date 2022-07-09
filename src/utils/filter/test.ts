import { parseQueryStringToWhere, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price: 'u25',
  platforms: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}
const queryStringGTE = { ...queryString, price: 'a25' }

const queryStringFREE = { ...queryString, price: '0' }

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format with lte price', () => {
    const parsedQuery = parseQueryStringToWhere({
      queryString,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      price_lte: 25,
      price_null: false,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Rockstar Games' }
    })
  })

  it('should parse queryString to where format with gte price', () => {
    const parsedQuery = parseQueryStringToWhere({
      queryString: queryStringGTE,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      price_gte: 25,
      price_null: false,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Rockstar Games' }
    })
  })

  it('should parse queryString to where format with price 0', () => {
    const parsedQuery = parseQueryStringToWhere({
      queryString: queryStringFREE,
      filterItems
    })

    expect(parsedQuery).toStrictEqual({
      price_lte: 0,
      price_null: false,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Rockstar Games' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price: 'u25',
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games'],
      sort: 'price:asc'
    })
  })
})
