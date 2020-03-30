import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

const merge = require('deepmerge')

// eslint-disable-next-line import/prefer-default-export
export const padded = {
  styles: ({
    theme,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fluid,
  }) => {
    const spacing = theme.sizing.getSidesPX({
      all: padding,
      x: paddingX,
      y: paddingY,
      top: paddingTop,
      bottom: paddingBottom,
      left: paddingLeft,
      right: paddingRight,
    })
    if (typeof fluid !== 'undefined' && !fluid) {
      spacing.left = null
      spacing.right = null
    }
    return css`
      padding-top: ${spacing.top};
      padding-bottom: ${spacing.bottom};
      padding-left: ${spacing.left};
      padding-right: ${spacing.right};
    `
  },
  propTypes: () => ({
    padding: PropTypes.oneOf([null, ...sizes]),
    paddingX: PropTypes.oneOf([null, ...sizes]),
    paddingY: PropTypes.oneOf([null, ...sizes]),
    paddingTop: PropTypes.oneOf([null, ...sizes]),
    paddingBottom: PropTypes.oneOf([null, ...sizes]),
    paddingLeft: PropTypes.oneOf([null, ...sizes]),
    paddingRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: (provided = {}) =>
    merge(
      {
        padding: null,
        paddingX: null,
        paddingY: null,
        paddingTop: null,
        paddingBottom: null,
        paddingLeft: null,
        paddingRight: null,
      },
      provided
    ),
}
