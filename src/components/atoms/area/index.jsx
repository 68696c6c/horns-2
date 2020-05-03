import React from 'react'
import PropTypes from 'prop-types'

import { chromatic, margined, padded } from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const Area = props => <Styled.Area {...handleProps(props, 'area')} />

Area.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  area: PropTypes.string,
}

Area.defaultProps = {
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  area: '',
}

export default Area
