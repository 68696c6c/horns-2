import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { borderStyles, sizes } from '../../config'

const merge = require('deepmerge')

const borderPropTypes = () => ({
  width: PropTypes.oneOf([null, ...sizes]),
  style: PropTypes.oneOf([null, ...borderStyles]),
})

// eslint-disable-next-line import/prefer-default-export
export const bordered = {
  styles: ({
    theme,
    borderAll,
    borderX,
    borderY,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
  }) => {
    const b = theme.borders.getBorders({
      all: borderAll,
      x: borderX,
      y: borderY,
      top: borderTop,
      bottom: borderBottom,
      left: borderLeft,
      right: borderRight,
    })
    const { top, bottom, left, right } = b
    return css`
      border-top-width: ${top.width};
      border-top-style: ${top.style};
      border-bottom-width: ${bottom.width};
      border-bottom-style: ${bottom.style};
      border-left-width: ${left.width};
      border-left-style: ${left.style};
      border-right-width: ${right.width};
      border-right-style: ${right.style};
    `
  },
  propTypes: () => ({
    borderAll: PropTypes.shape({ ...borderPropTypes() }),
    borderX: PropTypes.shape({ ...borderPropTypes() }),
    borderY: PropTypes.shape({ ...borderPropTypes() }),
    borderTop: PropTypes.shape({ ...borderPropTypes() }),
    borderBottom: PropTypes.shape({ ...borderPropTypes() }),
    borderLeft: PropTypes.shape({ ...borderPropTypes() }),
    borderRight: PropTypes.shape({ ...borderPropTypes() }),
  }),
  defaultProps: (provided = {}) =>
    merge(
      {
        borderAll: { width: null, style: null },
        borderX: { width: null, style: null },
        borderY: { width: null, style: null },
        borderTop: { width: null, style: null },
        borderBottom: { width: null, style: null },
        borderLeft: { width: null, style: null },
        borderRight: { width: null, style: null },
      },
      provided
    ),
}
