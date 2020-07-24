/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { borderStyles, colors, sizes } from '../config'
import {
  aligned,
  bordered,
  chromatic,
  interactive,
  padded,
  rounded,
  typographic,
} from '../traits'

const clickableDefaultProps = {
  textAlign: 'center',
  color: 'background',
  cursor: 'pointer',
  font: 'link',
  isTypographic: true,
  paddingConfig: 'clickables',
}

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
  defaultProps: () => {
    const {
      textAlign,
      color,
      cursor,
      font,
      isTypographic,
      paddingConfig,
    } = clickableDefaultProps
    return {
      ...aligned.defaultProps(),
      ...bordered.defaultProps(),
      ...chromatic.defaultProps(),
      ...interactive.defaultProps(),
      ...padded.defaultProps(),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(),
      textAlign,
      color,
      typographic: isTypographic,
      cursor,
      font,
      paddingConfig,
    }
  },
}

export const button = {
  styles: () => [
    // By default, webkit makes buttons have a gray background. We support outlined buttons by
    // setting typographic=true, causing the chromatic trait to set a color and border-color,
    // but no background.  This results in the button having an unexpected gray background.
    // We default the background to 'inherit' _before setting any other styles_ so that no matter
    // what happens, a button will not end up with the browser default background color.
    () =>
      css`
        background: inherit;
        display: inline-block;
      `,
    ...base.styles(),
    aligned.styles,
    bordered.styles,
    padded.styles,
    rounded.styles,
  ],
  propTypes: () => ({
    ...base.propTypes(),
  }),
  defaultProps: () => ({
    ...base.defaultProps(),
    font: 'button',
    typographic: false,
  }),
}

export const link = {
  styles: () => [...base.styles()],
  propTypes: () => ({
    ...base.propTypes(),
    variant: PropTypes.oneOf(['button', 'link']),
  }),
  defaultProps: () => ({
    ...base.defaultProps(),
    variant: 'link',
  }),
}

export const navItemVariantProps = {
  propTypes: () => ({
    variant: PropTypes.oneOf(['background', 'border', 'colorway', 'underline']),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    currentColor: PropTypes.oneOf([null, ...colors]),
    currentWidth: PropTypes.oneOf([null, ...sizes]),
    currentStyle: PropTypes.oneOf([null, ...borderStyles]),
  }),
  defaultProps: () => ({
    variant: 'border',
    layout: 'horizontal',
    currentColor: 'prominent',
    currentWidth: 'xSmall',
    currentStyle: 'solid',
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
    ...navItemVariantProps.propTypes(),
    href: PropTypes.string,
    current: PropTypes.bool,
  }),
  defaultProps: () => ({
    ...base.defaultProps(),
    ...navItemVariantProps.defaultProps(),
    paddingConfig: 'navs',
    href: '#',
    current: false,
    font: 'nav',
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
