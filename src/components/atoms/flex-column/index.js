import styled from '@emotion/styled'

import { flexibleColumn } from '../../../traits'

import { flex } from '../_base'

const FlexColumn = styled.div(...flex.styles(), flexibleColumn.styles)

FlexColumn.propTypes = {
  ...flex.propTypes(),
  ...flexibleColumn.propTypes(),
}

FlexColumn.defaultProps = {
  ...flex.defaultProps(),
  ...flexibleColumn.defaultProps(),
  x: 'center',
  y: 'evenly',
}

export default FlexColumn
