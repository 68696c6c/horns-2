import React from 'react'

import { handleProps } from '../../utils'
import { button, StyledButton } from '../../hadrons'

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
