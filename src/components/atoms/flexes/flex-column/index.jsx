/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  chromatic,
  flexibleColumn,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const FlexColumn = ({ children, ...others }) => (
  <Styled.FlexColumn {...handleProps(others, 'flex-column')}>
    {children}
  </Styled.FlexColumn>
)

FlexColumn.propTypes = {
  ...chromatic.propTypes(),
  ...flexibleColumn.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexColumn.defaultProps = {
  ...chromatic.defaultProps(),
  ...flexibleColumn.defaultProps('center', 'evenly'),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexColumn
