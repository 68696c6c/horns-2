import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const grid = {
  styles: () => [
    chromatic.styles,
    gridded.styles,
    margined.styles,
    padded.styles,
    responsive.styles,
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...contained.propTypes(),
    ...gridded.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...responsive.propTypes(),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(),
    ...contained.defaultProps(),
    ...gridded.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...responsive.defaultProps(),
  }),
}
