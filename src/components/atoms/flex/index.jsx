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
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const Flex = ({ children, ...others }) => {
  return <Styled.Flex {...handleProps(others)}>{children}</Styled.Flex>
}

Flex.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...flexible.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

Flex.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...flexible.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default Flex

export const FlexRow = props => <Flex {...props} direction="row" />
export const FlexColumn = props => <Flex {...props} direction="column" />

export const Box = props => <Styled.Box {...props} />

Box.propTypes = {
  ...chromatic.propTypes(),
  ...flexibleChild.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

Box.defaultProps = {
  ...chromatic.defaultProps(),
  ...flexibleChild.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}
