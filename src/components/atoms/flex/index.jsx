/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  flexibleChild,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export { default as FlexColumn } from './flex-column'
export { default as FlexRow } from './flex-row'

export const Box = props => <Styled.Box {...handleProps(props, 'flex-box')} />

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
