import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config/sizing'

// eslint-disable-next-line import/prefer-default-export
export const rounded = {
  styles: ({ theme, ...radiusProps }) => {
    const result = theme.radius.getCorners(radiusProps)
    return css`
      border-top-left-radius: ${result.topLeft};
      border-top-right-radius: ${result.topRight};
      border-bottom-left-radius: ${result.bottomLeft};
      border-bottom-right-radius: ${result.bottomRight};
    `
  },
  propTypes: () => ({
    radiusAll: PropTypes.oneOf([null, ...sizes]),
    radiusTop: PropTypes.oneOf([null, ...sizes]),
    radiusBottom: PropTypes.oneOf([null, ...sizes]),
    radiusLeft: PropTypes.oneOf([null, ...sizes]),
    radiusRight: PropTypes.oneOf([null, ...sizes]),
    radiusTopLeft: PropTypes.oneOf([null, ...sizes]),
    radiusTopRight: PropTypes.oneOf([null, ...sizes]),
    radiusBottomLeft: PropTypes.oneOf([null, ...sizes]),
    radiusBottomRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: () => ({
    radiusAll: null,
    radiusTop: null,
    radiusBottom: null,
    radiusLeft: null,
    radiusRight: null,
    radiusTopLeft: null,
    radiusTopRight: null,
    radiusBottomLeft: null,
    radiusBottomRight: null,
  }),
}
