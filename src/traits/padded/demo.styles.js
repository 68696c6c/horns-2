import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { padded } from '.'

export const Box = styled.div(
  ...padded.styles,
  () =>
    css`
      background-color: rgb(177, 189, 121);
      color: white;
      margin: 1em 0;
    `
)

export const BoxContent = styled.div(
  () =>
    css`
      background-color: rgb(126, 168, 181);
      color: white;
      text-align: center;
      padding: 0.3em;
    `
)
