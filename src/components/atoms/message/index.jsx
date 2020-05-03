import React from 'react'
import PropTypes from 'prop-types'

import { chromatic, typographic } from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const messageVariants = ['success', 'info', 'warning', 'danger']

const Message = ({ children, variant, ...others }) => (
  <Styled.Message {...handleProps(others, 'message')} color={variant}>
    {children}
  </Styled.Message>
)

Message.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  variant: PropTypes.oneOf(messageVariants),
}

Message.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps('message'),
  variant: 'info',
}

export default Message
