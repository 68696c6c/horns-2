import PropTypes from 'prop-types'
import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const editable = {
  styles: ({ theme }) => {
    return css`
    `
  },
  propTypes: () => ({
    fluid: PropTypes.bool,
  }),
  defaultProps: () => ({
    fluid: false,
  }),
}
