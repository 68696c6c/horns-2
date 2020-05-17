import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, margined, padded } from '../../../traits'

const Area = styled.div(
  chromatic.styles,
  margined.styles,
  padded.styles,
  ({ area }) =>
    css`
      grid-area: ${area && area};
    `
)

Area.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  area: PropTypes.string,
}

Area.defaultProps = {
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  area: '',
}

export default Area
