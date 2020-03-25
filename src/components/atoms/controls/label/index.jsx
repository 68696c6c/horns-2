import React from 'react'
import * as PropTypes from 'prop-types'

import { fontWeights } from '../../../../config'
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
  weight: PropTypes.oneOf(fontWeights),
}

Label.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps('xSmall'),
  ...typographic.defaultProps('label'),
  weight: 'semiBold',
}

export default Label
