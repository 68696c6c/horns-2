import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { grid } from '../_base'
import * as Styled from './styles'

const Columns = ({ children, ...others }) => (
  <Styled.Columns {...handleProps(others, 'columns')}>
    {children}
  </Styled.Columns>
)

Columns.propTypes = {
  ...grid.propTypes(),
  columns: PropTypes.number,
}

Columns.defaultProps = {
  ...grid.defaultProps(),
  columns: 0,
}

export default Columns
