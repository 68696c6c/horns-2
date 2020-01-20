import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colorShades } from '../config'

// eslint-disable-next-line import/prefer-default-export
export const chromatic = {
  styles: [
    ({ theme, color }) => {
      const c = theme.color.getTone(color)
      const { base, inactive, hover, active } = c
      return css`
        background: ${base.base};
        color: ${base.readable};
        border-color: ${base.border};
        &:disabled,
        &.inactive {
          background: ${inactive.base};
          color: ${inactive.readable};
          border-color: ${inactive.border};
        }
        &:not(:disabled):not(.inactive):hover {
          background: ${hover.base};
          color: ${hover.readable};
          border-color: ${hover.border};
        }
        &:not(:disabled):not(.inactive):active {
          background: ${active.base};
          color: ${active.readable};
          border-color: ${active.border};
        }
      `
    },
  ],
  propTypes: () => ({
    shade: PropTypes.oneOf(colorShades),
  }),
  defaultProps: shade => ({
    shade,
  }),
}
