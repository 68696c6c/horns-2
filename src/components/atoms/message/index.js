import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { chromatic, typographic } from '../../../traits'

export const messageVariants = ['success', 'info', 'warning', 'danger']

const Message = styled.label(chromatic.styles, typographic.styles)

Message.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  color: PropTypes.oneOf(messageVariants),
}

Message.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps('message'),
  color: 'info',
}

export default Message
