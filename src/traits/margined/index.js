import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { spacingSizes } from '../../config/spacing'

// eslint-disable-next-line import/prefer-default-export
export const margined = {
  styles: [
    ({ theme, margin }) => {
      const spacing = theme.spacing.getSpacing(margin)
      return css`
        margin-top: ${spacing};
        margin-right: ${spacing};
        margin-bottom: ${spacing};
        margin-left: ${spacing};
      `
    },
  ],
  propTypes: () => ({
    margin: PropTypes.oneOf(spacingSizes),
  }),
  defaultProps: margin => ({ margin }),
}
