import React from 'react'
import * as PropTypes from 'prop-types'

import { fontWeights } from '../../../../config'
import { chromatic, margined, typographic } from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from './styles'

const Label = ({ for: htmlFor, children, ...others }) => (
  <Styled.Label htmlFor={htmlFor} {...handleProps(others, 'label')}>
    {children}
  </Styled.Label>
)

Label.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  for: PropTypes.string,
  weight: PropTypes.oneOf(fontWeights),
}

Label.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps({ margin: 'xSmall' }),
  ...typographic.defaultProps('label'),
  for: null,
  weight: 'semiBold',
}

export default Label
