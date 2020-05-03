import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { grid } from '../_base/grid'
import * as Styled from './styles'

const Thirds = ({ children, ...others }) => (
  <Styled.Thirds {...handleProps(others, 'thirds')}>{children}</Styled.Thirds>
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
