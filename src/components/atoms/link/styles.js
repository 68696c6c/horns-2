import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  aligned,
  bordered,
  chromatic,
  interactive,
  padded,
  rounded,
  typographic,
} from '../../../traits'

export const Link = styled.a(
  ...chromatic.styles,
  ...interactive.styles,
  ...typographic.styles
)

export const Button = styled.a(
  ...aligned.styles,
  ...bordered.styles,
  ...chromatic.styles,
  ...interactive.styles,
  ...rounded.styles,
  ...padded.styles,
  ...typographic.styles,
  () =>
    css`
      display: inline-block;
    `
)
