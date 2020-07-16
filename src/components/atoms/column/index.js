import styled from '@emotion/styled'

import { cellular, chromatic, padded, responsive } from '../../../traits'

const Column = styled.div(
  cellular.styles,
  chromatic.styles,
  padded.styles,
  responsive.styles
)

Column.propTypes = {
  ...cellular.propTypes(),
  ...chromatic.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

Column.defaultProps = {
  ...cellular.defaultProps(),
  ...chromatic.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default Column
