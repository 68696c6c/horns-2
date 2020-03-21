import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  chromatic,
  margined,
  padded,
  responsive,
} from '../../../traits'

const baseStyles = [
  chromatic.styles,
  gridded.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
]

export const MessageBlock = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles,
  ({ area }) =>
    css`
      grid-area: ${area && area};
    `
)

export const MessageInline = styled.span()

export const MessageLabel = styled.label()
