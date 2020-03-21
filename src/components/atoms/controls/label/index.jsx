/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import * as PropTypes from 'prop-types'

import { chromatic, margined, typographic } from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const Label = ({ for: htmlFor, children, ...others }) => (
  <Styled.Label htmlFor={htmlFor} {...handleProps(others, 'control-label')}>
    {children}
  </Styled.Label>
)

Label.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  for: PropTypes.string.isRequired,
}

Label.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps('xSmall'),
  ...typographic.defaultProps('label'),
}

export default Label
