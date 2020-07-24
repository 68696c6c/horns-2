import styled from '@emotion/styled'

import { flexibleRow } from '../../../traits'
import { flex } from '../../../macros'

const FlexRow = styled.div(...flex.styles(), flexibleRow.styles)

FlexRow.propTypes = {
  ...flex.propTypes(),
  ...flexibleRow.propTypes(),
}

FlexRow.defaultProps = {
  ...flex.defaultProps(),
  ...flexibleRow.defaultProps(),
  x: 'evenly',
  y: 'center',
}

export default FlexRow
