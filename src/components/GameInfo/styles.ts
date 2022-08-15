import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};

    ${RibbonStyles.Wrapper} {
      right: -1rem;
      top: 2rem;
      font-size: ${theme.font.sizes.medium};
      padding: 1.5rem;
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};

      ${RibbonStyles.Wrapper} {
        position: relative;
        top: 0;
        right: 0.1rem;
        font-size: ${theme.font.sizes.medium};
        border-radius: ${theme.border.radius};

        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      max-width: 77rem;
      margin-top: ${theme.spacings.xxsmall};
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    max-width: 60%;
  }

  ${media.greaterThan('medium')`
    > h2 {
      max-width: 100%;
    }
  `}
`

export const PriceWrapper = styled.div`
  margin-top: 1rem;
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 4rem;
`}
`

export const Promotional = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-right: 7rem;

    ${media.greaterThan('medium')`
      margin: 0;
    `}
  `}
`
