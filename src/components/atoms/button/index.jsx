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

export const buttonDefaults = {
  alignment: 'center',
  color: 'background',
  cursor: 'pointer',
  paddingX: 'medium',
  paddingY: 'xSmall',
}

const Button = ({ children, ...others }) => (
  <Styled.Button {...handleProps(others, 'button')}>{children}</Styled.Button>
)

Button.propTypes = {
  ...aligned.propTypes(),
  ...bordered.propTypes(),
  ...chromatic.propTypes(),
  ...interactive.propTypes(),
  ...padded.propTypes(),
  ...rounded.propTypes(),
  ...typographic.propTypes(),
}

Button.defaultProps = {
  ...aligned.defaultProps(buttonDefaults.alignment),
  ...bordered.defaultProps(),
  ...chromatic.defaultProps(buttonDefaults.color),
  ...interactive.defaultProps(false, false, buttonDefaults.cursor),
  ...padded.defaultProps({
    paddingX: buttonDefaults.paddingX,
    paddingY: buttonDefaults.paddingY,
  }),
  ...rounded.defaultProps(),
  ...typographic.defaultProps('button'),
}

export default Button
