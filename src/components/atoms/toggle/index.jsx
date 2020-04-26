import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { control } from '../../hadrons'

import * as Styled from './styles'

export const toggleTypes = ['checkbox', 'radio']

const Toggle = ({ id, ...others }) => (
  <>
    <Styled.Toggle id={id} {...handleProps(others, 'toggle')} />
    <Styled.ToggleControl htmlFor={id} {...handleProps(others, 'control')} />
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
