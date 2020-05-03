import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'

import { grid } from '../_base/grid'

// eslint-disable-next-line import/prefer-default-export
export const Columns = styled.div(
  ...grid.styles(),
  contained.styles,
  ({ theme, columns }) => {
    let template = `repeat(${columns}, 1fr)`
    if (columns === 0) {
      const min = theme.grid.getColumnMin()
      template = `repeat(auto-fit, minmax(${min}, 1fr))`
    }
    return css`
      grid-template-columns: ${template};
    `
  }
)
