import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { bordered, inline, margined, padded } from '../../../traits'
import { message } from '../../../macros'

const baseStyles = [
  ...message.styles(),
  bordered.styles,
  margined.styles,
  padded.styles,
  () => css`
    align-items: center;
    .icon {
      margin-right: 1em;
    }
  `,
]

export const AlertBlock = styled.div(
  ...baseStyles,
  () =>
    css`
      display: flex;
    `
)

export const AlertInline = styled.span(
  ...baseStyles,
  inline.styles,
  () =>
    css`
      display: inline-flex;
      vertical-align: middle;
    `
)
