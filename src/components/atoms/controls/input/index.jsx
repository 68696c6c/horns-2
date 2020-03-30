import React from 'react'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { handleProps } from '../../../utils'

import { baseControl } from '../utils'
import * as Styled from '../styles'

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
  props.type = type
  let Tag
  switch (type) {
    case 'hidden':
      Tag = Styled.InputHidden
      break
    case 'tel':
      Tag = Styled.InputMasked
      props.mask = phoneMask
      props.placeholderChar = '_'
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
  return <Tag {...handleProps(props, 'control')} />
}

Input.propTypes = {
  ...baseControl.propTypes(),
  type: PropTypes.oneOf(inputTypes),
}

Input.defaultProps = {
  ...baseControl.defaultProps(),
  type: 'text',
}

export default Input
