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
  styles: () => [
    bordered.styles,
    chromaticSurface.styles,
    interactive.styles,
    margined.styles,
    padded.styles,
    rounded.styles,
    typographic.styles,
    () =>
      css`
        display: inline-flex;
        box-sizing: content-box;
        vertical-align: middle;
      `,
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
      ...margined.defaultProps(),
      ...padded.defaultProps({ padding }),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(font),
      placeholder: '',
      required: false,
    }
  },
}
