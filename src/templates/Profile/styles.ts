import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};

    ${media.greaterThan('medium')`
      border-radius: ${theme.border.radius};
      min-width: 75%;
      overflow: scroll;
    `}
  `}
`
