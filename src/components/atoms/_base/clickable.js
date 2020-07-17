/* eslint-disable react/forbid-foreign-prop-types */
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

const clickableDefaultProps = {
  alignment: 'center',
  color: 'background',
  cursor: 'pointer',
  font: 'link',
  isTypographic: true,
  paddingX: 'medium',
  paddingY: 'xSmall',
}

const base = {
  styles: () => [chromatic.styles, interactive.styles, typographic.styles],
  propTypes: () => ({
    ...aligned.propTypes(),
    ...chromatic.propTypes(),
    ...interactive.propTypes(),
    ...padded.propTypes(),
    ...typographic.propTypes(),
  }),
  defaultProps: (dp = {}) => {
    const defaultProps = merge({ ...clickableDefaultProps }, dp)
    const {
      alignment,
      color,
      cursor,
      font,
      isTypographic,
      paddingX,
      paddingY,
    } = defaultProps
    return {
      ...aligned.defaultProps(alignment),
      ...chromatic.defaultProps(color, isTypographic),
      ...interactive.defaultProps(false, isTypographic, cursor),
      ...padded.defaultProps(),
      ...typographic.defaultProps(font),
      paddingX,
      paddingY,
    }
  },
}

export const button = {
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
  propTypes: () => ({
    ...base.propTypes(),
    ...bordered.propTypes(),
    ...rounded.propTypes(),
  }),
  defaultProps: dp => ({
    ...base.defaultProps(dp),
    ...bordered.defaultProps(),
    ...rounded.defaultProps(),
    font: 'button',
    typographic: false,
  }),
}

export const link = {
  styles: () => [...base.styles()],
  propTypes: () => ({
    ...base.propTypes(),
    ...bordered.propTypes(),
    ...rounded.propTypes(),
    variant: PropTypes.oneOf(['button', 'link']),
  }),
  defaultProps: dp => ({
    ...base.defaultProps(dp),
    ...bordered.defaultProps(),
    ...rounded.defaultProps(),
    variant: 'link',
  }),
}

export const navItem = {
  styles: () => [
    ...base.styles(),
    padded.styles,
    () =>
      css`
        display: inline-block;
      `,
  ],
  propTypes: () => ({
    ...base.propTypes(),
  }),
  defaultProps: dp => ({
    ...base.defaultProps(dp),
    font: 'text',
    typographic: false,
  }),
}

export const Link = styled.a(...link.styles())

export const LinkButton = styled.a(...button.styles())

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
