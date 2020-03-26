import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, typographic } from '../../../traits'

export const ListItem = styled.li(
  chromatic.styles,
  typographic.styles,
  ({ theme }) => {
    return css`
      
`
  }
)

export const ListOrdered = styled.ol(
  chromatic.styles,
  typographic.styles,)

export const ListUnordered = styled.ul(
  chromatic.styles,
  typographic.styles,)
