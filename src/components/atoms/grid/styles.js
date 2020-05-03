import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'

import { grid } from '../_base/grid'

// eslint-disable-next-line import/prefer-default-export
export const Grid = styled.div(
  ...grid.styles(),
  contained.styles,
  () => css`
    grid-template-areas: 'one two three four five six seven eight nine ten eleven twelve';
  `
)
