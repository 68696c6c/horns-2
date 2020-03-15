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

const FlexColumn = ({ children, ...others }) => (
  <Styled.Flex {...handleProps(others, 'flex-column')} direction="column">
    {children}
  </Styled.Flex>
)

FlexColumn.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...flexible.propTypes('column'),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

FlexColumn.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...flexible.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default FlexColumn
