/* eslint-disable react/jsx-props-no-spreading,default-case */
import React from 'react'
import PropTypes from 'prop-types'
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaCheckCircle,
  FaSkull,
} from 'react-icons/fa'

import {
  bordered,
  chromatic,
  margined,
  padded,
  typographic,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const messageVariants = ['success', 'info', 'warning', 'danger']

const Message = ({ children, block, variant, withIcon, ...others }) => {
  const Tag = block ? Styled.MessageBlock : Styled.MessageInline
  let Icon
  switch (variant) {
    case 'danger':
      Icon = FaSkull
      break
    case 'info':
      Icon = FaInfoCircle
      break
    case 'success':
      Icon = FaCheckCircle
      break
    case 'warning':
      Icon = FaExclamationCircle
      break
  }
  return (
    <Tag {...handleProps(others, 'message')} color={variant}>
      {withIcon && <Icon className="icon" />}
      {children}
    </Tag>
  )
}

Message.propTypes = {
  ...bordered.propTypes(),
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...typographic.propTypes(),
  variant: PropTypes.oneOf(messageVariants),
  block: PropTypes.bool,
  withIcon: PropTypes.bool,
}

Message.defaultProps = {
  ...bordered.defaultProps(),
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps('small', 'medium'),
  ...typographic.defaultProps(),
  variant: 'info',
  block: false,
  withIcon: false,
}

export default Message
