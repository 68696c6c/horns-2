import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { margined } from '.'
import { padded } from '../padded'

export const BoxContainer = styled.div(
  () =>
    css`
      overflow: auto;
      background-color: rgb(172, 122, 79);
      color: white;
      margin: 1em 0;
    `
)

export const Box = styled.div(
  ...padded.styles,
  ...margined.styles,
  () =>
    css`
      background-color: rgb(177, 189, 121);
      color: white;
      border: 1px solid rgb(227, 194, 133);
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
