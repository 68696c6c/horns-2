import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

export const paddingConfigTargets = ['controls', 'clickables', 'tables', 'navs']

// eslint-disable-next-line import/prefer-default-export
export const padded = {
  styles: ({ theme, fluid, ...paddingProps }) => {
    const spacing = theme.padding.getPadding(paddingProps)
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
    paddingConfig: PropTypes.oneOf([null, ...paddingConfigTargets]),
    padding: PropTypes.oneOf([null, ...sizes]),
    paddingX: PropTypes.oneOf([null, ...sizes]),
    paddingY: PropTypes.oneOf([null, ...sizes]),
    paddingTop: PropTypes.oneOf([null, ...sizes]),
    paddingBottom: PropTypes.oneOf([null, ...sizes]),
    paddingLeft: PropTypes.oneOf([null, ...sizes]),
    paddingRight: PropTypes.oneOf([null, ...sizes]),
  }),
  defaultProps: () => ({
    paddingConfig: null,
    padding: null,
    paddingX: null,
    paddingY: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
  }),
}
