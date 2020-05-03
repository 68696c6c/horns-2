import styled from '@emotion/styled'

import { cellular, chromatic, padded, responsive } from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const Column = styled.div(
  cellular.styles,
  chromatic.styles,
  padded.styles,
  responsive.styles
)
