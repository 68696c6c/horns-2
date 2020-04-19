import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  aligned,
  bordered,
  chromatic,
  interactive,
  padded,
  rounded,
  typographic,
} from '../../../traits'

const merge = require('deepmerge')

const base = {
  styles: () => [chromatic.styles, interactive.styles, typographic.styles],
  propTypes: () => ({
    ...aligned.propTypes(),
    ...bordered.propTypes(),
    ...chromatic.propTypes(),
    ...interactive.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
  }),
  defaultProps: ({
    alignment,
    color,
    cursor,
    font,
    isTypographic,
    paddingX,
    paddingY,
  }) => ({
    ...aligned.defaultProps(alignment),
    ...bordered.defaultProps(),
    ...chromatic.defaultProps(color, isTypographic),
    ...interactive.defaultProps(false, isTypographic, cursor),
    ...padded.defaultProps({ paddingX, paddingY }),
    ...rounded.defaultProps(),
    ...typographic.defaultProps(font),
  }),
}

const button = {
  styles: () => [
    ...base.styles(),
    aligned.styles,
    bordered.styles,
    padded.styles,
    rounded.styles,
    () =>
      css`
        display: inline-block;
      `,
  ],
}

const link = {
  propTypes: () => ({
    ...base.propTypes(),
    variant: PropTypes.oneOf(['button', 'link']),
  }),
  defaultProps: dp => ({
    ...base.defaultProps(dp),
    variant: 'link',
  }),
}

const anchorDefaultProps = {
  alignment: 'center',
  color: 'background',
  cursor: 'pointer',
  font: 'link',
  isTypographic: true,
  paddingX: 'medium',
  paddingY: 'xSmall',
}

// eslint-disable-next-line import/prefer-default-export
export const anchor = {
  styles: type => {
    switch (type) {
      case 'button':
        return button.styles()
      // case 'navItem':
      //   return block.styles()
      case 'link':
      default:
        return base.styles()
    }
  },
  propTypes: type => {
    switch (type) {
      case 'button':
        return base.propTypes()
      // case 'navItem':
      //   return block.propTypes()
      case 'link':
      default:
        return link.propTypes()
    }
  },
  defaultProps: (type, dp = {}) => {
    const defaultProps = merge({ ...anchorDefaultProps }, dp)
    switch (type) {
      case 'button':
        return base.defaultProps(defaultProps)
      // case 'navItem':
      //   return block.defaultProps(defaultProps)
      case 'link':
      default:
        return link.defaultProps(defaultProps)
    }
  },
}

export const Link = styled.a(...anchor.styles('link'))

export const Button = styled.button(...anchor.styles('button'))
export const LinkButton = styled.a(...anchor.styles('button'))

export const getLinkVariantProps = variant => {
  if (variant === 'button') {
    return {
      Tag: LinkButton,
      font: 'button',
      isText: false,
    }
  }
  return {
    Tag: Link,
    font: 'link',
    isText: true,
  }
}
