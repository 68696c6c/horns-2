/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const Grid = ({ children, variant, ...others }) => (
  <Styled.Grid {...handleProps(others, 'grid')}>
    {children}
  </Styled.Grid>
)

Grid.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

Grid.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...gridded.defaultProps(true, 12),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default Grid

const baseSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const spans = [null, ...baseSpans]

export const Column = props => <Styled.Column {...props} />

Column.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  span: PropTypes.oneOf(baseSpans),
  spanMin: PropTypes.oneOf(spans),
  spanSm: PropTypes.oneOf(spans),
  spanMd: PropTypes.oneOf(spans),
  spanLg: PropTypes.oneOf(spans),
  spanMax: PropTypes.oneOf(spans),
  start: PropTypes.oneOf(spans),
  startMin: PropTypes.oneOf(spans),
  startSm: PropTypes.oneOf(spans),
  startMd: PropTypes.oneOf(spans),
  startLg: PropTypes.oneOf(spans),
  startMax: PropTypes.oneOf(spans),
}

Column.defaultProps = {
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  span: 1,
  spanMin: null,
  spanSm: null,
  spanMd: null,
  spanLg: null,
  spanMax: null,
  start: null,
  startMin: null,
  startSm: null,
  startMd: null,
  startLg: null,
  startMax: null,
}
