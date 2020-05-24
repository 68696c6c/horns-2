import styled from '@emotion/styled'

import { flexibleRow } from '../../../traits'

import { flex } from '../_base'

const FlexRow = styled.div(...flex.styles(), flexibleRow.styles)

FlexRow.propTypes = {
  ...flex.propTypes(),
  ...flexibleRow.propTypes(),
}

FlexRow.defaultProps = {
  ...flex.defaultProps(),
  ...flexibleRow.defaultProps('evenly', 'center'),
}

export default FlexRow
