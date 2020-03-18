/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseControl } from '../utils'
import * as Styled from '../styles'

export const toggleTypes = ['checkbox', 'radio']

const Toggle = ({ id, font, type, ...others }) => {
  return (
    <>
      <Styled.Toggle
        id={id}
        font={font}
        type={type}
        {...handleProps(others, 'toggle')}
      />
      <Styled.ToggleControl
        htmlFor={id}
        font={font}
        type={type}
        className="toggle-control"
      />
    </>
  )
}

Toggle.propTypes = {
  ...baseControl.propTypes,
  type: PropTypes.oneOf(toggleTypes),
}

Toggle.defaultProps = {
  ...baseControl.defaultProps,
  type: 'checkbox',
}

export default Toggle
