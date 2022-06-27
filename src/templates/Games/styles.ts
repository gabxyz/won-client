import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter}
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const GamesLoader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    > svg {
      width: 8rem;
      height: 8rem;
    }

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.large};
      
      > svg {
        width: 12rem;
        height: 12rem;
      }
    `}
  `}
`
