import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'

import { grid } from '../_base'

const Grid = styled.div(
  ...grid.styles(),
  contained.styles,
  () => css`
    grid-template-areas: 'one two three four five six seven eight nine ten eleven twelve';
  `
)

Grid.propTypes = {
  ...grid.propTypes(),
  columns: PropTypes.number,
}

Grid.defaultProps = {
  ...grid.defaultProps(),
  columns: 0,
}

export default Grid
