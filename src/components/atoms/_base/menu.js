/* eslint-disable react/forbid-foreign-prop-types */
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/prefer-default-export
export const menu = {
  styles: () => [
    ({ open }) =>
      !open &&
      css`
        display: none;
      `,
    () => css`
      position: absolute;
      box-sizing: border-box;
      min-width: 100%;
    `,
  ],
  propTypes: () => ({
    open: PropTypes.bool,
  }),
  defaultProps: () => ({
    open: false,
  }),
}
