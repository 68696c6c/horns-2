import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import {
  bordered,
  chromaticSurface,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const baseControl = {
  styles: [
    bordered.styles,
    chromaticSurface.styles,
    margined.styles,
    padded.styles,
    rounded.styles,
    typographic.styles,
    ({ theme, font }) => {
      // Force the element height to match the line-height to ensure that inputs that have controls
      // inside them (e.g. type="datetime-local") don't end up a different size than standard inputs.
      const f = theme.typography.getStyle(font)
      return css`
        box-sizing: content-box;
        vertical-align: middle;
        height: ${f.lineHeight};
      `
    },
  ],
  propTypes: {
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  },
  defaultProps: {
    ...bordered.defaultProps(),
    ...chromaticSurface.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps('xSmall'),
    ...rounded.defaultProps(),
    ...typographic.defaultProps('control'),
    placeholder: '',
    required: false,
  },
}
