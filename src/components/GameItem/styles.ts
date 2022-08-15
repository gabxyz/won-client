import { BuyBox } from 'components/GameCard/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const GameContent = styled.div`
  display: flex;
  width: 100%;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 12rem;
    height: 7rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 18rem;
      height: 8.6rem;
    `}
  `}
`

export const PriceBox = styled(BuyBox)`
  ${({ theme }) => css`
    flex-direction: row-reverse;
    gap: 0.5rem;
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Remove = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}

    &:hover {
      color: ${darken(0.2, theme.colors.primary)};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: 2rem;
    `}
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`
