import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'

import { grid } from '../_base/grid'

// eslint-disable-next-line import/prefer-default-export
export const Areas = styled.div(
  ...grid.styles(),
  contained.styles,
  ({ areas }) => css`
    grid-template-areas: ${areas};
  `
)
