import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const gridded = {
  styles: ({ theme, gapped, gap, breakpoint }) => {
    let gapValue = null
    if (gapped) {
      gapValue = gap ? theme.sizing.getPX(gap) : theme.grid.getGap()
    }
    const displayCSS = breakpoint
      ? css`
          display: block;
          ${theme.grid.break(breakpoint)} {
            display: grid;
          }
        `
      : css`
          display: grid;
        `
    return css`
      grid-gap: ${gapValue};
      ${displayCSS}
    `
  },
  propTypes: () => ({
    gapped: PropTypes.bool,
    gap: PropTypes.oneOf([null, ...sizes]),
    // breakpoint is granted by the responsive trait.
  }),
  defaultProps: (gapped = false) => ({
    gapped,
    gap: null,
  }),
}
