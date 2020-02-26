import React from 'react'

import {
  aligned,
  bordered,
  chromatic,
  interactive,
  padded,
  rounded,
  typographic,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const Button = ({ children, ...others }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Styled.Button {...handleProps(others, 'button')}>{children}</Styled.Button>
)

Button.propTypes = {
  ...aligned.propTypes(),
  ...bordered.propTypes(),
  ...chromatic.propTypes(),
  ...interactive.propTypes(),
  ...typographic.propTypes(),
  ...padded.propTypes(),
  ...rounded.propTypes(),
}

Button.defaultProps = {
  ...aligned.defaultProps('center'),
  ...bordered.defaultProps(),
  ...chromatic.defaultProps('background'),
  ...interactive.defaultProps(false, false, 'pointer'),
  ...typographic.defaultProps('button'),
  ...padded.defaultProps('xSmall'),
  ...rounded.defaultProps(),
}

export default Button
