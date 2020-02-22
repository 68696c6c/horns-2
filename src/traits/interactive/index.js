import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { cursors } from '../../config'

// hover, active
// text-decoration, background-color, color
// cursor
// eslint-disable-next-line import/prefer-default-export
export const interactive = {
  styles: [
    ({ theme, inactive, cursor, color, font }) => {
      const c = theme.color.getColorway(color)
      if (inactive) {
        return css`
          cursor: ${cursor};
          background: ${c.inactive.base};
          color: ${c.inactive.readable};
          border-color: ${c.inactive.border};
        `
      }
      const s = theme.typography.getStyle(font)
      return css`
        cursor: ${cursor};
        &:not(:disabled):not(.inactive):hover {
          background: ${c.hover.base};
          color: ${c.hover.readable};
          border-color: ${c.hover.border};
          text-decoration-line: ${s.hover.textDecorationLine};
          text-decoration-style: ${s.hover.textDecorationStyle};
        }
        &:not(:disabled):not(.inactive):active {
          background: ${c.active.base};
          color: ${c.active.readable};
          border-color: ${c.active.border};
          text-decoration-line: ${s.active.textDecorationLine};
          text-decoration-style: ${s.active.textDecorationStyle};
        }
      `
    },
  ],
  propTypes: () => ({
    inactive: PropTypes.bool,
    cursor: PropTypes.oneOf(cursors),
  }),
  defaultProps: (inactive = false, cursor = null) => ({ inactive, cursor }),
}
