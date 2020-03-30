import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseControl } from '../utils'
import * as Styled from '../styles'

export const toggleTypes = ['checkbox', 'radio']

const Toggle = ({ id, ...others }) => (
  <>
    <Styled.Toggle id={id} {...handleProps(others, 'toggle')} />
    <Styled.ToggleControl htmlFor={id} {...handleProps(others, 'control')} />
  </>
)

Toggle.propTypes = {
  ...baseControl.propTypes(),
  type: PropTypes.oneOf(toggleTypes),
}

Toggle.defaultProps = {
  ...baseControl.defaultProps('pointer'),
  type: 'checkbox',
}

export default Toggle

export const Checkbox = props => <Toggle {...props} type="checkbox" />
export const Radio = props => <Toggle {...props} type="radio" />
