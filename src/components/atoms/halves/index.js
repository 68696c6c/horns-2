import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { containedSplit } from '../../../traits'
import { grid } from '../../../macros'

const Halves = styled.div(
  ...grid.styles(),
  containedSplit.styles,
  () => css`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    > :nth-child(odd) {
      grid-area: left;
    }
    > :nth-child(even) {
      grid-area: right;
    }
  `
)

Halves.propTypes = {
  ...grid.propTypes(),
}

Halves.defaultProps = {
  ...grid.defaultProps(),
}

export default Halves
