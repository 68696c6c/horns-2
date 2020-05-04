import React from 'react'

import { handleProps } from '../../utils'

import { grid } from '../_base'
import * as Styled from './styles'

const Areas = ({ children, ...others }) => (
  <Styled.Areas {...handleProps(others, 'areas')}>{children}</Styled.Areas>
)

Areas.propTypes = {
  ...grid.propTypes(),
}

Areas.defaultProps = {
  ...grid.defaultProps(),
}

export default Areas
