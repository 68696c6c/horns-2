import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { fontWeights } from '../../../config'
import { chromatic, margined, typographic } from '../../../traits'

const Label = styled.label(
  chromatic.styles,
  margined.styles,
  typographic.styles
)

Label.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  weight: PropTypes.oneOf(fontWeights),
}

Label.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps(),
  ...typographic.defaultProps('label'),
  weight: 'semiBold',
}

export default Label
