import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { grid } from '../_base/grid'
import * as Styled from './styles'

const Grid = ({ children, ...others }) => (
  <Styled.Grid {...handleProps(others, 'grid')} columns={12} gapped>
    {children}
  </Styled.Grid>
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
