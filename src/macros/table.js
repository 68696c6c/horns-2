/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { chromatic, padded, typographic } from '../traits'

// eslint-disable-next-line import/prefer-default-export
export const table = {
  styles: () => [
    chromatic.styles,
    padded.styles,
    ({ theme }) => css`
      width: 100%;
      border-collapse: collapse;
      td,
      th {
        ${padded.styles({
          theme,
          paddingConfig: 'tables',
        })};
      }
      th {
        ${typographic.styles({
          theme,
          font: 'label',
        })};
      }
      td {
        ${typographic.styles({
          theme,
          font: 'table',
        })};
      }
    `,
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...padded.propTypes(),
    height: PropTypes.string,
    minWidth: PropTypes.string,
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(),
    ...padded.defaultProps(),
    height: 'auto',
    minWidth: '',
  }),
}
