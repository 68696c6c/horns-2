import React from 'react'

import { handleProps } from '../../../utils'
import { control, StyledTextarea } from '../../../hadrons'

const Textarea = ({ children, ...others }) => (
  <StyledTextarea {...handleProps(others, 'control')}>
    {children}
  </StyledTextarea>
)

Textarea.propTypes = {
  ...control.propTypes(),
}

Textarea.defaultProps = {
  ...control.defaultProps(),
}

export default Textarea
