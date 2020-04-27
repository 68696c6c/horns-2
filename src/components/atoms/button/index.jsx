import React from 'react'

import { handleProps } from '../../utils'

import { button, Button as StyledButton } from '../_base/clickable'

const Button = ({ children, ...others }) => (
  <StyledButton {...handleProps(others, 'button')}>{children}</StyledButton>
)

Button.propTypes = {
  ...button.propTypes(),
}

Button.defaultProps = {
  ...button.defaultProps(),
}

export default Button
