/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {
  cellular,
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

// @TODO combine with the Template component with this being the default variant.
const Grid = ({ children, variant, ...others }) => (
  <Styled.Grid {...handleProps(others, 'grid')}>{children}</Styled.Grid>
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

export const Column = props => <Styled.Column {...props} />

Column.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  ...cellular.propTypes(),
}

Column.defaultProps = {
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  ...cellular.defaultProps(),
}
