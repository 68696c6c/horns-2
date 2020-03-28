import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const margined = {
  styles: ({
    theme,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    fluid,
  }) => {
    const spacing = theme.sizing.getSidesPX({
      all: margin,
      x: marginX,
      y: marginY,
      top: marginTop,
      bottom: marginBottom,
      left: marginLeft,
      right: marginRight,
    })
    if (typeof fluid !== 'undefined' && !fluid) {
      spacing.left = null
      spacing.right = null
    }
    return css`
      margin-top: ${spacing.top};
      margin-bottom: ${spacing.bottom};
      margin-left: ${spacing.left};
      margin-right: ${spacing.right};
    `
  },
  propTypes: () => ({
    margin: PropTypes.oneOf([null, ...sizes]),
    marginX: PropTypes.oneOf([null, ...sizes]),
    marginY: PropTypes.oneOf([null, ...sizes]),
    marginTop: PropTypes.oneOf([null, ...sizes]),
    marginBottom: PropTypes.oneOf([null, ...sizes]),
    marginLeft: PropTypes.oneOf([null, ...sizes]),
    marginRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: (margin = null, marginX = null, marginY = null) => ({
    margin,
    marginX,
    marginY,
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
  }),
}
