import PropTypes from 'prop-types'
import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const gridded = {
  styles: [
    ({ theme, gapped, columns }) => {
      let template = `repeat(${columns}, 1fr)`
      if (columns === 0) {
        const min = theme.grid.getColumnMin()
        template = `repeat(auto-fit, minmax(${min}, 1fr))`
      }
      const gap = gapped ? theme.grid.getGap() : null
      return css`
        display: grid;
        grid-gap: ${gap};
        grid-template-columns: ${template};
      `
    },
  ],
  propTypes: () => ({
    gapped: PropTypes.bool,
    columns: PropTypes.number,
  }),
  defaultProps: (gapped = false, columns = 0) => ({ gapped, columns }),
}
