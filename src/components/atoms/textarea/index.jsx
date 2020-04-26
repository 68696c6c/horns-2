import React from 'react'

import { handleProps } from '../../utils'
import { control } from '../../hadrons'

import * as Styled from './styles'

const Textarea = ({ children, ...others }) => (
  <Styled.Textarea {...handleProps(others, 'control')}>
    {children}
  </Styled.Textarea>
)

Textarea.propTypes = {
  ...control.propTypes(),
}

Textarea.defaultProps = {
  ...control.defaultProps(),
}

export default Textarea
