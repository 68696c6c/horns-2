import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  flexibleColumn,
  chromatic,
  contained,
  margined,
  padded,
  responsive,
} from '../../../traits'

export const Box = styled.div(
  chromatic.styles,
  margined.styles,
  padded.styles,
  responsive.styles
)

export const Flex = styled.div(
  chromatic.styles,
  contained.styles,
  flexibleColumn.styles,
  margined.styles,
  padded.styles,
  responsive.styles
)
