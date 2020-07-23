import React from 'react'
import PropTypes from 'prop-types'
// @TODO need a way to set icons at the theme level so different themes can use different iconsets.
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaCheckCircle,
  FaSkull,
} from 'react-icons/fa'

import { bordered, margined, padded } from '../../../traits'
import { message } from '../../../macros'
import { handleProps } from '../../utils'
import * as Styled from './styles'

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
  ...message.propTypes(),
  ...bordered.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  block: PropTypes.bool,
  withIcon: PropTypes.bool,
}

Alert.defaultProps = {
  ...message.defaultProps(),
  ...bordered.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  padding: 'small',
  paddingX: 'medium',
  block: false,
  withIcon: false,
  typographic: false,
}

export default Alert
