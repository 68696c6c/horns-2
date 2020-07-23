/* eslint-disable react/forbid-foreign-prop-types */
import {
  chromatic,
  contained,
  margined,
  padded,
  responsive,
} from '../traits'

// eslint-disable-next-line import/prefer-default-export
export const block = {
  styles: () => [
    chromatic.styles,
    contained.styles,
    margined.styles,
    padded.styles,
    responsive.styles,
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...contained.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...responsive.propTypes(),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(),
    ...contained.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...responsive.defaultProps(),
  }),
}
