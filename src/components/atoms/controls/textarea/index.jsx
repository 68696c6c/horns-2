/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { handleProps } from '../../../utils'

import { baseControl } from '../utils'
import * as Styled from '../styles'

const Textarea = ({ children, ...others }) => (
  <Styled.Textarea {...handleProps(others, 'control')}>
    {children}
  </Styled.Textarea>
)

Textarea.propTypes = {
  ...baseControl.propTypes(),
}

Textarea.defaultProps = {
  ...baseControl.defaultProps(),
}

export default Textarea
