import { tint } from 'polished'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `}
`

export const FreeGames = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
