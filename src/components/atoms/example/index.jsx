import React from 'react'

import * as Styled from './styles'

const Button = ({ children, ...others }) => (
  <Styled.Button {...others}>{children}</Styled.Button>
)

Button.propTypes = {}

Button.defaultProps = {}

export default Button
