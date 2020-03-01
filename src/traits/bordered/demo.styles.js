import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { bordered } from '.'

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div(
  bordered.styles,
  () =>
    css`
      border-color: orange;
    `
)
