/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import {
  bordered,
  chromaticSurface,
  inline,
  interactive,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'

const merge = require('deepmerge')

const controllableDefaultProps = {
  cursor: 'text',
  font: 'control',
  padding: 'xSmall',
}

export const baseControl = {
  styles: () => [
    bordered.styles,
    chromaticSurface.styles,
    inline.styles,
    interactive.styles,
    margined.styles,
    padded.styles,
    rounded.styles,
    typographic.styles,
    () => css`
      display: inline-flex;
      box-sizing: content-box;
      vertical-align: middle;
    `,
  ],
  propTypes: () => ({
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...inline.propTypes(),
    ...interactive.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes({ paddingConfig: 'controls' }),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
  }),
  defaultProps: (dp = {}) => {
    const defaultProps = merge({ ...controllableDefaultProps }, dp)
    const { cursor, font, padding } = defaultProps
    return {
      ...bordered.defaultProps(),
      ...chromaticSurface.defaultProps(),
      ...inline.defaultProps(),
      ...interactive.defaultProps(false, false, cursor),
      ...margined.defaultProps({ margin: 'min' }),
      ...padded.defaultProps({ padding }),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(font),
    }
  },
}

export const control = {
  styles: () => [...baseControl.styles()],
  propTypes: () => ({
    ...baseControl.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  defaultProps: dp => ({
    ...baseControl.defaultProps(dp),
    placeholder: '',
    required: false,
  }),
}

export const select = {
  styles: () => [
    ...control.styles(),
    () => css`
      appearance: none;
      cursor: pointer;
      &::-ms-expand {
        display: none;
      }
    `,
  ],
  propTypes: () => ({
    ...control.propTypes(),
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }),
  defaultProps: () => ({
    ...control.defaultProps(),
    multiline: false,
    multiple: false,
    options: [],
  }),
}
