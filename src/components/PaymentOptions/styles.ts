import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
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
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  border-radius: ${theme.border.radius};
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`
