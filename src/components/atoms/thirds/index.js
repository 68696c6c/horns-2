import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { containedSplit } from '../../../traits'
import { grid } from '../../../macros'

const Thirds = styled.div(
  ...grid.styles(),
  containedSplit.styles,
  ({ reversed }) => css`
    grid-template-columns: ${reversed ? '2fr 1fr' : '1fr 2fr'};
    grid-template-areas: 'left right';
    > :nth-child(odd) {
      grid-area: left;
    }
    > :nth-child(even) {
      grid-area: right;
    }
  `
)

Thirds.propTypes = {
  ...grid.propTypes(),
  reversed: PropTypes.bool,
}

Thirds.defaultProps = {
  ...grid.defaultProps(),
  reversed: false,
}

export default Thirds
