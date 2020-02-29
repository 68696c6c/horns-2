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
  padding: 'xSmall',
}

const Button = ({ children, ...others }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
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
  ...padded.defaultProps(buttonDefaults.padding),
  ...rounded.defaultProps(),
  ...typographic.defaultProps('button'),
}

export default Button
