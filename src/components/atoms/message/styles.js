import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  bordered,
  chromatic,
  margined,
  padded,
  typographic,
} from '../../../traits'

const baseStyles = [
  bordered.styles,
  chromatic.styles,
  margined.styles,
  padded.styles,
  typographic.styles,
  () => {
    return css`
      display: flex;
      align-items: center;
      .icon {
        margin-right: 1em;
      }
    `
  },
]

export const MessageBlock = styled.div(...baseStyles)

export const MessageInline = styled.span(...baseStyles)
