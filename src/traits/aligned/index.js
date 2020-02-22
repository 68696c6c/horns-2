import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { alignments } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const aligned = {
  styles: [
    ({ textAlign }) => css`
      text-align: ${textAlign};
    `,
  ],
  propTypes: () => ({
    textAlign: PropTypes.oneOf(alignments),
  }),
  defaultProps: (textAlign = 'left') => ({ textAlign }),
}
