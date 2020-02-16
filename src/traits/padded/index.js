import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { spacingSizes } from '../../config/spacing'

// eslint-disable-next-line import/prefer-default-export
export const padded = {
  styles: [
    ({ theme, padding }) => {
      const spacing = theme.spacing.getSpacing(padding)
      return css`
        padding-top: ${spacing};
        padding-right: ${spacing};
        padding-bottom: ${spacing};
        padding-left: ${spacing};
      `
    },
  ],
  propTypes: () => ({
    padding: PropTypes.oneOf(spacingSizes),
  }),
  defaultProps: padding => ({ padding }),
}
