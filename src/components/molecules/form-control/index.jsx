import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// import uuid from 'uuid/v4'

import { gridded } from '../../../traits'
// import { control } from '../../atoms/_base/controllable'
import { handleProps } from '../../utils'

import {
  inputTypes,
  Input,
  Select,
  Textarea,
  Label,
  Message,
} from '../../atoms'
import ToggleGroup from '../toggle-group'

import * as Styled from './styles'

export const controlTypes = [
  'select',
  'multiselect',
  'textarea',
  'checkbox',
  'radio',
  ...inputTypes,
]

const FormControl = ({
  type,
  name,
  id,
  label,
  placeholder,
  required,
  hasError,
  errorMessage,
  horizontal,
  options,
  ...others
}) => {
  const errorClass = hasError && 'error'
  let WrapperTag = Styled.FormControl
  let wrapperProps = { columns: 1, gapped: true, gap: 'xxSmall' }
  const inputProps = {}
  if (horizontal) {
    WrapperTag = Styled.FormControlHorizontal
    // wrapperProps = { areas: `"label input message"` }
    wrapperProps = {}
  }
  let Tag
  switch (type) {
    case 'select':
      Tag = Select
      inputProps.options = options
      break
    case 'multiselect':
      Tag = Select
      wrapperProps.multiLine = true
      inputProps.multiple = true
      inputProps.options = options
      break
    case 'textarea':
      Tag = Textarea
      wrapperProps.multiLine = true
      break
    case 'checkbox':
    case 'radio':
      Tag = ToggleGroup
      inputProps.options = options
      inputProps.horizontal = horizontal
      break
    default:
      Tag = Input
      inputProps.type = type
  }
  return (
    <WrapperTag {...wrapperProps} {...handleProps(others, 'form-control')}>
      {label && (
        <Label
          htmlFor={id}
          required={required}
          hasError={hasError}
          area="label"
          className={errorClass}
        >
          {label}
        </Label>
      )}
      <Tag
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required ? 'required' : ''}
        {...handleProps(inputProps, errorClass)}
        area="input"
      />
      {errorMessage && (
        <Message htmlFor={id} variant="danger" area="message">
          {errorMessage}
        </Message>
      )}
    </WrapperTag>
  )
}

FormControl.propTypes = {
  ...gridded.propTypes(),
  horizontal: PropTypes.bool,
}

FormControl.defaultProps = {
  ...gridded.defaultProps(true),
  horizontal: false,
}

export default FormControl
