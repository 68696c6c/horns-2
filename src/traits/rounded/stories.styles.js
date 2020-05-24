import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { rounded } from '.'

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div(
  rounded.styles,
  () =>
    css`
      background-color: orange;
      padding: 1em;
    `
)
