import React from 'react'

import { handleProps } from '../../utils'

import { grid } from '../_base'
import * as Styled from './styles'

const Halves = ({ children, ...others }) => (
  <Styled.Halves {...handleProps(others, 'halves')}>{children}</Styled.Halves>
)

Halves.propTypes = {
  ...grid.propTypes(),
}

Halves.defaultProps = {
  ...grid.defaultProps(),
}

export default Halves
