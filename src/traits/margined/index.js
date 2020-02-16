import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { sizes } from '../../config/sizing'

// eslint-disable-next-line import/prefer-default-export
export const margined = {
  styles: [
    ({ theme, margin }) => {
      const spacing = theme.sizing.getPX(margin)
      return css`
        margin-top: ${spacing};
        margin-right: ${spacing};
        margin-bottom: ${spacing};
        margin-left: ${spacing};
      `
    },
  ],
  propTypes: () => ({
    margin: PropTypes.oneOf(sizes),
  }),
  defaultProps: margin => ({ margin }),
}
