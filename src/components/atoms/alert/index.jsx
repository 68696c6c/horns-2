import React from 'react'
import PropTypes from 'prop-types'
// @TODO need a way to set icons at the theme level so different themes can use different iconsets.
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

const Alert = ({ children, block, variant, withIcon, ...others }) => {
  const Tag = block ? Styled.AlertBlock : Styled.AlertInline
  let Icon
  // eslint-disable-next-line default-case
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
    <Tag {...handleProps(others, 'alert')} color={variant}>
      {withIcon && <Icon className="icon" />}
      {children}
    </Tag>
  )
}

Alert.propTypes = {
  ...bordered.propTypes(),
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...typographic.propTypes(),
  variant: PropTypes.oneOf(messageVariants),
  block: PropTypes.bool,
  withIcon: PropTypes.bool,
}

Alert.defaultProps = {
  ...bordered.defaultProps(),
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps({ padding: 'small', paddingX: 'medium' }),
  ...typographic.defaultProps(),
  variant: 'info',
  block: false,
  withIcon: false,
}

export default Alert
