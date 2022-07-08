import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parsePrice = (price: string, obj: any) => {
  if (price[0] === '0' || price[0] === 'u') {
    obj['price_lte'] =
      price.length < 1 ? Number(price[0]) : Number(price.slice(1))
  }

  if (price[0] === 'a') {
    obj['price_gte'] = Number(price.slice(1))
  }
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckbox = item?.type === 'checkbox'

      item?.name === 'price'
        ? parsePrice(queryString[key]!.toString(), obj)
        : (obj[key] = !isCheckbox
            ? queryString[key]
            : { name_contains: queryString[key] })
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return obj
}
