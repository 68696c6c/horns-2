import React from 'react'

import { handleProps } from '../../utils'

import { grid } from '../_base'
import * as Styled from './styles'

const Stack = ({ children, ...others }) => (
  <Styled.Stack {...handleProps(others, 'stack')}>{children}</Styled.Stack>
)

Stack.propTypes = {
  ...grid.propTypes(),
}

Stack.defaultProps = {
  ...grid.defaultProps(),
}

export default Stack
