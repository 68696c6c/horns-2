import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  flexible,
  flexibleChild,
  chromatic,
  contained,
  margined,
  padded,
  responsive,
} from '../../../traits'

export const Box = styled.div(
  chromatic.styles,
  flexibleChild.styles,
  margined.styles,
  padded.styles,
  responsive.styles
)

export const Flex = styled.div(
  chromatic.styles,
  contained.styles,
  flexible.styles,
  margined.styles,
  padded.styles,
  responsive.styles
)
