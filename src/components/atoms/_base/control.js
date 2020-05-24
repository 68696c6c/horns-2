/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import {
  bordered,
  chromaticSurface,
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

export const control = {
  styles: () => [
    bordered.styles,
    chromaticSurface.styles,
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
    // @TODO make this a trait?
    ({ theme, multiline, multiple, font }) => {
      // Force the element height to match the line-height to ensure that inputs that have controls
      // inside them (e.g. type="datetime-local") don't end up a different size than standard inputs.
      const f = theme.typography.getStyle(font)
      return multiline || multiple
        ? null
        : css`
            height: ${f.lineHeight};
            min-width: ${f.lineHeight};
          `
    },
  ],
  propTypes: () => ({
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...interactive.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes({ paddingConfig: 'controls' }),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    multiline: PropTypes.bool,
  }),
  defaultProps: (dp = {}) => {
    const defaultProps = merge({ ...controllableDefaultProps }, dp)
    const { cursor, font, padding } = defaultProps
    return {
      ...bordered.defaultProps(),
      ...chromaticSurface.defaultProps(),
      ...interactive.defaultProps(false, false, cursor),
      ...margined.defaultProps({ margin: 'min' }),
      ...padded.defaultProps({ padding }),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(font),
      placeholder: '',
      required: false,
      multiline: false,
    }
  },
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
