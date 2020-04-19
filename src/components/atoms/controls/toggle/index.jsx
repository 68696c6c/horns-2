import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { control, StyledToggle, StyledToggleControl } from '../../../hadrons'

export const toggleTypes = ['checkbox', 'radio']

const Toggle = ({ id, ...others }) => (
  <>
    <StyledToggle id={id} {...handleProps(others, 'toggle')} />
    <StyledToggleControl htmlFor={id} {...handleProps(others, 'control')} />
  </>
)

Toggle.propTypes = {
  ...control.propTypes(),
  type: PropTypes.oneOf(toggleTypes),
}

Toggle.defaultProps = {
  ...control.defaultProps('pointer'),
  type: 'checkbox',
  cursor: 'pointer',
}

export default Toggle

export const Checkbox = props => <Toggle {...props} type="checkbox" />
export const Radio = props => <Toggle {...props} type="radio" />
