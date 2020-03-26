import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { chromatic, typographic } from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const baseList = {
  styles: () => [
    chromatic.styles,
    typographic.styles,
    () => {
      return css`
        list-style-position: inside;
      `
    },
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...typographic.propTypes(),
    ordered: PropTypes.bool,
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(null, true),
    ...typographic.defaultProps(),
    ordered: false,
  }),
}
