import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const margined = {
  styles: [
    ({
      theme,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    }) => {
      const { top, bottom, left, right } = theme.sizing.getSidesPX({
        all: margin,
        x: marginX,
        y: marginY,
        top: marginTop,
        bottom: marginBottom,
        left: marginLeft,
        right: marginRight,
      })
      return css`
        margin-top: ${top};
        margin-right: ${bottom};
        margin-bottom: ${left};
        margin-left: ${right};
      `
    },
  ],
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
