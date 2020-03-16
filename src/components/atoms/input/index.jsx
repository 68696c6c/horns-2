/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { chromaticSurface, margined, padded } from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

// eslint-disable-next-line
const phoneMask = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/ ]

export const inputTypes = [
  'hidden',
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'range',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
  'currency',
  'percentage',
]

const Input = ({ currency, type, ...others }) => {
  const props = { ...others }
  let Tag
  switch (type) {
    case 'hidden':
      Tag = Styled.InputHidden
      props.type = type
      break
    case 'tel':
      Tag = Styled.InputMasked
      props.mask = phoneMask
      props.placeholderChar = '_'
      props.type = type
      break
    case 'currency':
      Tag = Styled.InputMasked
      props.mask = createNumberMask({
        prefix: currency,
        allowDecimal: true,
      })
      props.currency = currency
      props.type = 'text'
      break
    case 'percentage':
      Tag = Styled.InputMasked
      props.mask = createNumberMask({
        prefix: '',
        suffix: '%',
        allowDecimal: true,
      })
      props.type = 'text'
      break
    default:
      Tag = Styled.Input
  }
  return <Tag {...handleProps(props, 'input')} />
}

Input.propTypes = {
  ...chromaticSurface.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  type: PropTypes.oneOf(inputTypes),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

Input.defaultProps = {
  ...chromaticSurface.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  type: 'text',
  placeholder: '',
  required: false,
}

export default Input
