import PropTypes from 'prop-types'

import {
  bordered,
  chromaticSurface,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const baseProps = {
  propTypes: {
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  },
  defaultProps: {
    ...bordered.defaultProps(),
    ...chromaticSurface.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...rounded.defaultProps(),
    ...typographic.defaultProps(),
    placeholder: '',
    required: false,
  },
}
