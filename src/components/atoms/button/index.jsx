import React from 'react'

import { handleProps } from '../../utils'
import { anchor, StyledButton } from '../../hadrons'

const Button = ({ children, ...others }) => (
  <StyledButton {...handleProps(others, 'button')}>{children}</StyledButton>
)

Button.propTypes = {
  ...anchor.propTypes('button'),
}

Button.defaultProps = {
  ...anchor.defaultProps('button', { font: 'button', isTypographic: false }),
}

export default Button
