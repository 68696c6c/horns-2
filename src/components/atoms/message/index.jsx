import React from 'react'

import { message } from '../../../macros'

import * as Styled from './styles'

const Message = ({ variant, ...others }) => (
  <Styled.Message {...others} color={variant} />
)

Message.propTypes = {
  ...message.propTypes(),
}

Message.defaultProps = {
  ...message.defaultProps(),
  font: 'message',
}

export default Message
