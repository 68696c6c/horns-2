import React from 'react'

import * as Styled from './styles'

const Color = ({ children, ...others }) => (
  <Styled.Color {...others}>{children}</Styled.Color>
)

Color.propTypes = {}

Color.defaultProps = {}

export default Color
