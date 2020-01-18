import React from 'react'

import * as Styled from './styles'

const Color = ({ children, theme, ...others }) => console.log('color theme', theme) || (
  <Styled.Colorway theme={theme} {...others}>{children}</Styled.Colorway>
)

Color.propTypes = {}

Color.defaultProps = {}

export default Color
