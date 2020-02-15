import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { typographic } from '.'

export const Text = styled.span(
  ...typographic.styles,
  () =>
    css`
      display: block;
    `
)

export const A = styled.a(...typographic.styles)
export const Button = styled.button(...typographic.styles)

// export const P = styled.p(...typographic.styles)
export const H1 = styled.h1(...typographic.styles)
export const H2 = styled.h2(...typographic.styles)
export const H3 = styled.h3(...typographic.styles)
export const H4 = styled.h4(...typographic.styles)
export const H5 = styled.h5(...typographic.styles)
export const H6 = styled.h6(...typographic.styles)
