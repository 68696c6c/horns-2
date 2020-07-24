import PropTypes from 'prop-types'

import { chromatic, typographic } from '../traits'

export const messageVariants = ['success', 'info', 'warning', 'danger']

export const message = {
  styles: () => [chromatic.styles, typographic.styles],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...typographic.propTypes(),
    variant: PropTypes.oneOf(messageVariants),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(null, true),
    ...typographic.defaultProps(),
    variant: 'info',
  }),
}
