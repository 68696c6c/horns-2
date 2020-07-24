/* eslint-disable react/forbid-foreign-prop-types */
import { chromatic, margined, padded, responsive } from '../traits'

// eslint-disable-next-line import/prefer-default-export
export const flex = {
  styles: () => [
    chromatic.styles,
    margined.styles,
    padded.styles,
    responsive.styles,
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...responsive.propTypes(),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...responsive.defaultProps(),
  }),
}
