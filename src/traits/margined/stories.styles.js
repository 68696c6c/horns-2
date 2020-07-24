import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { margined } from '.'
import { padded } from '../padded'

const colors = {
  margin: 'rgb(172, 122, 79)',
  border: '#ffc107', // rgb(227, 194, 133)
  padding: 'rgb(177, 189, 121)',
  content: 'rgb(126, 168, 181)',
}

export const BoxContainer = styled.div(
  () =>
    css`
      overflow: auto;
      background-color: ${colors.margin};
      color: white;
      margin: 1em 0;
    `
)

export const Box = styled.div(
  padded.styles,
  margined.styles,
  () =>
    css`
      background-color: ${colors.padding};
      color: white;
      border: 2px solid ${colors.border};
    `
)

export const BoxContent = styled.div(
  () =>
    css`
      background-color: ${colors.content};
      color: white;
      text-align: center;
      padding: 0.3em;
    `
)
