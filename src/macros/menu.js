/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

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
      top: 0;
      z-index: 99999999999;
      box-sizing: border-box;
      min-width: 100%;
    `,
  ],
  propTypes: () => ({
    open: PropTypes.bool,
    direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
  }),
  defaultProps: () => ({
    open: false,
    direction: 'bottom',
  }),
}
