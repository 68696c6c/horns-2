import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  cellular,
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'

export const Column = styled.div(
  cellular.styles,
  chromatic.styles,
  padded.styles,
  margined.styles,
  responsive.styles
)

export const Grid = styled.div(
  chromatic.styles,
  contained.styles,
  gridded.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
  () => {
    return css`
      grid-template-areas: 'one two three four five six seven eight nine ten eleven twelve';
    `
  }
)
