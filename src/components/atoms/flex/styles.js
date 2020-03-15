import styled from '@emotion/styled'

import {
  flexibleColumn,
  flexibleRow,
  chromatic,
  margined,
  padded,
  responsive,
} from '../../../traits'

const baseStyles = [
  chromatic.styles,
  flexibleColumn.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
]

export const FlexRow = styled.div(...baseStyles, flexibleRow.styles)
export const FlexColumn = styled.div(...baseStyles, flexibleColumn.styles)
