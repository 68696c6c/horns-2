/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  chromatic,
  contained,
  flexibleColumn,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const FlexColumn = ({ children, ...others }) => (
  <Styled.Flex {...handleProps(others, 'flex-column')}>
    {children}
  </Styled.Flex>
)

FlexColumn.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...flexibleColumn.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexColumn.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...flexibleColumn.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexColumn

export const ItemColumn = props => (
  <FlexColumn x="center" y="evenly" {...props} fluid />
)
