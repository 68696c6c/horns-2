import React from 'react'
import PropTypes from 'prop-types'

import { gridded } from '../../../traits'
import { control } from '../../atoms/_base'
import {
  inputTypes,
  Input,
  SelectNative,
  Textarea,
  Label,
  Message,
} from '../../atoms'
import { handleProps } from '../../utils'

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
  let wrapperProps = {}
  const inputProps = {}
  if (horizontal) {
    WrapperTag = Styled.FormControlHorizontal
    wrapperProps = { columns: 2 }
  }
  let Tag
  switch (type) {
    case 'hidden':
      inputProps.type = type
      return (
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          {...handleProps(inputProps, errorClass)}
        />
      )
    case 'select':
      Tag = SelectNative
      inputProps.options = options
      break
    case 'multiselect':
      Tag = SelectNative
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
      if (horizontal) {
        wrapperProps.multiLine = true
      }
      break
    default:
      Tag = Input
      inputProps.type = type
  }
  return (
    <WrapperTag {...wrapperProps} {...handleProps(others, 'form-control')}>
      {label && (
        <Label htmlFor={id} required={required} className={errorClass}>
          {label}
        </Label>
      )}
      <Tag
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        {...handleProps(inputProps, errorClass)}
      />
      {errorMessage && (
        <Message htmlFor={id} variant="danger">
          {errorMessage}
        </Message>
      )}
    </WrapperTag>
  )
}

FormControl.propTypes = {
  ...gridded.propTypes(),
  ...control.propTypes(),
  horizontal: PropTypes.bool,
}

FormControl.defaultProps = {
  ...gridded.defaultProps(true),
  ...control.defaultProps(),
  horizontal: false,
  fluid: true,
  gap: 'xSmall',
}

export default FormControl
