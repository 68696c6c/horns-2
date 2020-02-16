import PropTypes from 'prop-types'

import { breakpoints } from '../../config'

// This trait cannot provide any styles because it is up to the component that
// implements this trait to decide how to respond to its breakpoint.
// eslint-disable-next-line import/prefer-default-export
export const responsive = {
  styles: [],
  propTypes: () => ({
    breakpoint: PropTypes.oneOf(breakpoints),
  }),
  defaultProps: (breakpoint = 'mobile') => ({ breakpoint }),
}
