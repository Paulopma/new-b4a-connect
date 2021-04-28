import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideText: () => css`
    .text {
      display: none;
    }
  `
}

export const Wrapper = styled.main<LogoProps>`
  ${({ theme, color, size, hideText }) => css`
    color: ${theme.colors[color!]};

    ${!!hideText && wrapperModifiers.hideText()}
    ${!!size && wrapperModifiers[size]}
  `}
`
