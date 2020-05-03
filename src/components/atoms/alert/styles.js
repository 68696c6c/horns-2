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

export const AlertBlock = styled.div(...baseStyles)

export const AlertInline = styled.span(...baseStyles)
