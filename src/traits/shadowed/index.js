import PropTypes from 'prop-types'
import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const shadowed = {
  styles: ({ theme }) => {
    const v = theme.sizing.getPX('xxSmall')
    return css`
      box-shadow: 0 ${v} ${v} rgba(0, 0, 0, 0.6);
    `
  },
  propTypes: () => ({
    shadowX: PropTypes.oneOf([]),
    shadowY: PropTypes.oneOf([]),
    shadowBlur: PropTypes.oneOf([]),
    shadowSpread: PropTypes.oneOf([]),
  }),
  defaultProps: () => ({}),
}
