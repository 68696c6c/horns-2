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

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button(
  aligned.styles,
  bordered.styles,
  chromatic.styles,
  interactive.styles,
  rounded.styles,
  padded.styles,
  typographic.styles
)
