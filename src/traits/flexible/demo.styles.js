import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { flexibleRow, flexibleColumn } from '.'

const baseStyles = ({ index }) => css`
  margin-top: 1em;
  margin-bottom: 1em;
  background: ${index % 2 === 0 ? 'black' : 'gray'};
`

export const FlexRow = styled.div(flexibleRow.styles, baseStyles)
export const FlexColumn = styled.div(flexibleColumn.styles, baseStyles)
