import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config/sizing'

// @TODO test this.
export const getSideSizes = ({
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {
  let left = padding
  let right = padding
  let top = padding
  let bottom = padding
  if (paddingX) {
    left = paddingX
    right = paddingX
  }
  if (paddingY) {
    top = paddingY
    bottom = paddingY
  }
  if (paddingTop) {
    top = paddingTop
  }
  if (paddingBottom) {
    bottom = paddingBottom
  }
  if (paddingLeft) {
    left = paddingLeft
  }
  if (paddingRight) {
    right = paddingRight
  }
  return {
    top,
    right,
    bottom,
    left,
  }
}

export const padded = {
  styles: [
    ({
      theme,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    }) => {
      const p = getSideSizes({
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
      })
      return css`
        padding-top: ${theme.sizing.getPX(p.top)};
        padding-right: ${theme.sizing.getPX(p.right)};
        padding-bottom: ${theme.sizing.getPX(p.bottom)};
        padding-left: ${theme.sizing.getPX(p.left)};
      `
    },
  ],
  propTypes: () => ({
    padding: PropTypes.oneOf([null, ...sizes]),
    paddingX: PropTypes.oneOf([null, ...sizes]),
    paddingY: PropTypes.oneOf([null, ...sizes]),
    paddingTop: PropTypes.oneOf([null, ...sizes]),
    paddingBottom: PropTypes.oneOf([null, ...sizes]),
    paddingLeft: PropTypes.oneOf([null, ...sizes]),
    paddingRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: (padding = null, paddingX = null, paddingY = null) => ({
    padding,
    paddingX,
    paddingY,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
  }),
}
