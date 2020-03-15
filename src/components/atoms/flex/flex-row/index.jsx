/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  flexible,
  flexibleChild,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const FlexRow = ({ children, ...others }) => (
  <Styled.Flex {...handleProps(others, 'flex-row')} direction="row">
    {children}
  </Styled.Flex>
)

FlexRow.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...flexible.propTypes('row'),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexRow.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...flexible.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexRow

export const ItemRow = props => <FlexRow x="evenly" y="center" {...props} fluid />
