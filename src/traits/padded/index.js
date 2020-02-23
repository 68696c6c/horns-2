import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config/sizing'

// @TODO add props for top, bottom, left, right, etc padding
// eslint-disable-next-line import/prefer-default-export
export const padded = {
  styles: [
    ({ theme, padding }) => {
      const spacing = theme.sizing.getPX(padding)
      return css`
        padding-top: ${spacing};
        padding-right: ${spacing};
        padding-bottom: ${spacing};
        padding-left: ${spacing};
      `
    },
  ],
  propTypes: () => ({
    padding: PropTypes.oneOf(sizes),
  }),
  defaultProps: padding => ({ padding }),
}
