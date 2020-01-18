import React from 'react'

import * as Styled from './styles'

const Color = ({ children, ...others }) => (
  <Styled.Button {...others}>{children}</Styled.Button>
)

Color.propTypes = {}

Color.defaultProps = {}

export default Color
