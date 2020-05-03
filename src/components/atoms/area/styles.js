import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, margined, padded } from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const Area = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles,
  ({ area }) =>
    css`
      grid-area: ${area && area};
    `
)
