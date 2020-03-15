/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  chromatic,
  contained,
  flexibleRow,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const FlexRow = ({ children, ...others }) => (
  <Styled.Flex {...handleProps(others, 'flex-row')}>
    {children}
  </Styled.Flex>
)

FlexRow.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...flexibleRow.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexRow.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...flexibleRow.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexRow

export const ItemRow = props => <FlexRow x="evenly" y="center" {...props} fluid />
