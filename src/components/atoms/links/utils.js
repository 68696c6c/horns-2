import PropTypes from 'prop-types'

import {
  aligned,
  bordered,
  chromatic,
  interactive,
  padded,
  rounded,
  typographic,
} from '../../../traits'
import { buttonDefaults } from '../button'

import * as Styled from './styles'

export const baseProps = {
  propTypes: {
    ...aligned.propTypes(),
    ...bordered.propTypes(),
    ...chromatic.propTypes(),
    ...interactive.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    variant: PropTypes.oneOf(['button', 'link']),
  },
  defaultProps: {
    ...aligned.defaultProps(buttonDefaults.alignment),
    ...bordered.defaultProps(),
    ...chromatic.defaultProps(buttonDefaults.color),
    ...interactive.defaultProps(false, true, buttonDefaults.cursor),
    ...padded.defaultProps(buttonDefaults.padding),
    ...rounded.defaultProps(),
    ...typographic.defaultProps('link'),
    variant: 'link',
  },
}

export const getVariantProps = variant => {
  if (variant === 'button') {
    return {
      Tag: Styled.Button,
      font: 'button',
      isText: false,
    }
  }
  return {
    Tag: Styled.Link,
    font: 'link',
    isText: true,
  }
}
