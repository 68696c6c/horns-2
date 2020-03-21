/* eslint-disable react/jsx-props-no-spreading,default-case */
import React from 'react'
import PropTypes from 'prop-types'

import {
  cellular,
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const messageVariants = ['block', 'inline', 'label']

// @TODO this should be a colored box with an optional icon based on the action colorways (success, info, warning, danger)
const Message = ({ children, variant, ...others }) => {
  const props = { ...others }
  let Tag
  switch (variant) {
    case 'block':
      Tag = Styled.MessageBlock
      break
    case 'inline':
      Tag = Styled.MessageInline
      break
    case 'label':
      Tag = Styled.MessageLabel
      break
  }
  return <Tag {...handleProps(props, 'message')}>{children}</Tag>
}

Message.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(messageVariants),
}

Message.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...gridded.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'inline',
}

export default Message
