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
    const widths = theme.borders.getSidesWidth({
      all: theme.sizing.getPX(borderAll.width),
      x: theme.sizing.getPX(borderX.width),
      y: theme.sizing.getPX(borderY.width),
      top: theme.sizing.getPX(borderTop.width),
      bottom: theme.sizing.getPX(borderBottom.width),
      left: theme.sizing.getPX(borderLeft.width),
      right: theme.sizing.getPX(borderRight.width),
    })
    const styles = theme.borders.getSidesStyle({
      all: borderAll.style,
      x: borderX.style,
      y: borderY.style,
      top: borderTop.style,
      bottom: borderBottom.style,
      left: borderLeft.style,
      right: borderRight.style,
    })
    return css`
      border-top-width: ${widths.top};
      border-top-style: ${styles.top};
      border-bottom-width: ${widths.bottom};
      border-bottom-style: ${styles.bottom};
      border-left-width: ${widths.left};
      border-left-style: ${styles.left};
      border-right-width: ${widths.right};
      border-right-style: ${styles.right};
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
