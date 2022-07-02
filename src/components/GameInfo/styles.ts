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

    ${RibbonStyles.Wrapper} {
      right: -1rem;
      top: 2rem;
      font-size: ${theme.font.sizes.medium};

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};

      ${RibbonStyles.Wrapper} {
        position: relative;
        top: 0;
        right: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.large};
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

  ${media.greaterThan('medium')`
      align-items: center;
    `}
`

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
    margin-right: -${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `}
  `}
`

export const Promotional = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
    margin-right: ${theme.spacings.small};
    `}
  `}
`
