import PropTypes from 'prop-types'
import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const gridded = {
  styles: ({ theme, gapped, columns, breakpoint }) => {
    let template = `repeat(${columns}, 1fr)`
    if (columns === 0) {
      const min = theme.grid.getColumnMin()
      template = `repeat(auto-fit, minmax(${min}, 1fr))`
    }
    const gap = gapped ? theme.grid.getGap() : null
    const displayCSS = breakpoint ? css`
        display: block;
        ${theme.grid.break(breakpoint)} {
          display: grid;
        }
      ` : css`display: grid;`
    return css`
      grid-gap: ${gap};
      grid-template-columns: ${template};
      ${displayCSS}
    `
  },
  propTypes: () => ({
    gapped: PropTypes.bool,
    columns: PropTypes.number,
    // breakpoint is granted by the responsive trait.
  }),
  defaultProps: (gapped = false, columns = 0) => ({ gapped, columns }),
}
