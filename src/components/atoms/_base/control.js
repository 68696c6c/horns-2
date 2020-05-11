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

// eslint-disable-next-line import/prefer-default-export
export const control = {
  styles: (inline = true) => [
    bordered.styles,
    chromaticSurface.styles,
    interactive.styles,
    margined.styles,
    rounded.styles,
    typographic.styles,
    ({ theme }) => {
      const { x, y } = theme.padding.getSizes('controls')
      return padded.styles({ theme, paddingX: x, paddingY: y })
    },
    ({ theme, font }) => {
      let heightCSS
      if (inline) {
        // Force the element height to match the line-height to ensure that inputs that have controls
        // inside them (e.g. type="datetime-local") don't end up a different size than standard inputs.
        const f = theme.typography.getStyle(font)
        heightCSS = css`
          height: ${f.lineHeight};
          min-width: ${f.lineHeight};
        `
      }
      return css`
        display: inline-flex;
        box-sizing: content-box;
        vertical-align: middle;
        ${heightCSS}
      `
    },
  ],
  propTypes: () => ({
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...interactive.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
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
    }
  },
}
