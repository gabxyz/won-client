import { darken } from 'polished'
import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`

const moveUp = keyframes`
  from {
    height: 20%;
  }
  to {
    height: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
`

export const Loading = styled.div`
  height: 20%;
  svg {
    stroke-width: 0.2rem;
    animation: ${fadeOut} 0.3s ease-out 1s;

    ${media.greaterThan('medium')`
      stroke-width: 0.1rem;
      height: 8rem;
      width: 8rem;
    `}
  }
`

export const Success = styled.div`
  ${({ theme }) => css`
    height: 20%;
    text-align: center;
    animation: ${moveUp} 0.5s forwards 0.5s;

    svg {
      animation: ${fadeIn} 0.5s ease-in;
      color: ${theme.colors.white};
      border-radius: 50%;
      border: 0.2rem solid ${theme.colors.primary};
      padding: 1.2rem;
      height: 6rem;
      width: 6rem;

      ${media.greaterThan('medium')`
        padding: 1.5rem;
        height: 8rem;
        width: 8rem;
      `}
    }
  `}
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${fadeIn} 0.5s ease-in 0.8s forwards;
  visibility: hidden;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    text-align: center;
    max-width: 30rem;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }

    a:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }

    ${media.greaterThan('medium')`
      max-width: 65rem;
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
