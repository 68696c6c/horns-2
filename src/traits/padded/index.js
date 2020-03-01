import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

// eslint-disable-next-line import/prefer-default-export
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
      const { top, bottom, left, right } = theme.sizing.getSidesPX({
        all: padding,
        x: paddingX,
        y: paddingY,
        top: paddingTop,
        bottom: paddingBottom,
        left: paddingLeft,
        right: paddingRight,
      })
      return css`
        padding-top: ${top};
        padding-bottom: ${bottom};
        padding-left: ${left};
        padding-right: ${right};
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
