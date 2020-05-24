import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { contained } from '.'

export const Container = styled.div(
  contained.styles,
  () =>
    css`
      background-color: orange;
      padding-top: 1em;
      padding-bottom: 1em;
    `
)

export const Box = styled.div(
  () =>
    css`
      background-color: green;
      color: white;
      padding: 1em;
    `
)
