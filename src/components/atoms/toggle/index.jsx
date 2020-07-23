import React from 'react'
import PropTypes from 'prop-types'

import { control } from '../../../macros'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const toggleTypes = ['checkbox', 'radio']

const Toggle = ({ id, multiline, ...others }) => (
  <>
    <Styled.Toggle id={id} {...handleProps(others, 'toggle')} />
    <Styled.ToggleControl
      htmlFor={id}
      {...handleProps(others, 'control')}
      multiline={multiline}
    />
  </>
)

Toggle.propTypes = {
  ...control.propTypes(),
  type: PropTypes.oneOf(toggleTypes).isRequired,
}

Toggle.defaultProps = {
  ...control.defaultProps(),
  cursor: 'pointer',
  multiline: true,
}

export default Toggle

export const Checkbox = props => <Toggle {...props} type="checkbox" />
export const Radio = props => <Toggle {...props} type="radio" />
