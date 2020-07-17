import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'
import { evalSides, unprefixMargin } from '../../config/utils'

// eslint-disable-next-line import/prefer-default-export
export const margined = {
  styles: ({ theme, fluid, ...marginProps }) => {
    const propValues = unprefixMargin(marginProps)
    const m = evalSides(propValues)
    const spacing = theme.sizing.getSidesPX(m)
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
    marginAll: PropTypes.oneOf([null, ...sizes]),
    marginX: PropTypes.oneOf([null, ...sizes]),
    marginY: PropTypes.oneOf([null, ...sizes]),
    marginTop: PropTypes.oneOf([null, ...sizes]),
    marginBottom: PropTypes.oneOf([null, ...sizes]),
    marginLeft: PropTypes.oneOf([null, ...sizes]),
    marginRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: () => ({
    marginAll: null,
    marginX: null,
    marginY: null,
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
  }),
}
