import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colors, colorSwatches } from '../config'

// eslint-disable-next-line import/prefer-default-export
export const colorable = {
  styles: [
    ({ theme, colorway }) => {
      const { base, hover, active } = theme.color.getShade(colorway)
      return css`
        background: ${base.base};
        color: ${base.readable};
        border-color: ${base.border};
        &:hover {
          background: ${hover.base};
          color: ${hover.readable};
          border-color: ${hover.border};
        }
        &:active {
          background: ${active.base};
          color: ${active.readable};
          border-color: ${active.border};
        }
      `
    },
  ],
  propTypes: () => ({
    colorway: PropTypes.oneOf(colorSwatches),
  }),
  defaultProps: colorway => ({
    colorway,
  }),
}
