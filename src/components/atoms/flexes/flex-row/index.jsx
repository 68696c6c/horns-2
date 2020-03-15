/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  chromatic,
  flexibleRow,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const FlexRow = ({ children, ...others }) => (
  <Styled.FlexRow {...handleProps(others, 'flex-row')}>
    {children}
  </Styled.FlexRow>
)

FlexRow.propTypes = {
  ...chromatic.propTypes(),
  ...flexibleRow.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexRow.defaultProps = {
  ...chromatic.defaultProps(),
  ...flexibleRow.defaultProps('evenly', 'center'),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexRow
