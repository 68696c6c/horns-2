/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  chromatic,
  flexibleChild,
  margined,
  padded,
  responsive,
} from '../../../../traits'
import { handleProps } from '../../../utils'

import * as Styled from '../styles'

const Box = props => <Styled.Box {...handleProps(props, 'flex-box')} />

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

export default Box
