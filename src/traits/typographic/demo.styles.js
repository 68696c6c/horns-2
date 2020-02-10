import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { typographic, typographicBlock } from '.'

export const Text = styled.span(
  ...typographic.styles,
  () =>
    css`
      display: block;
    `
)

export const A = styled.a(...typographic.styles)
export const Button = styled.button(...typographic.styles)

export const P = styled.p(...typographicBlock.styles)
export const H1 = styled.h1(...typographicBlock.styles)
export const H2 = styled.h2(...typographicBlock.styles)
export const H3 = styled.h3(...typographicBlock.styles)
export const H4 = styled.h4(...typographicBlock.styles)
export const H5 = styled.h5(...typographicBlock.styles)
export const H6 = styled.h6(...typographicBlock.styles)
