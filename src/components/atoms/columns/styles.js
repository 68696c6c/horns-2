import styled from '@emotion/styled'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'

export const Column = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles
)

export const Columns = styled.div(
  chromatic.styles,
  contained.styles,
  gridded.styles,
  margined.styles,
  padded.styles,
  responsive.styles
)
