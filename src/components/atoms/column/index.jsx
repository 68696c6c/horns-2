import React from 'react'

import {
  cellular,
  chromatic,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const Column = props => <Styled.Column {...handleProps(props, 'column')} />

Column.propTypes = {
  ...cellular.propTypes(),
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
}

Column.defaultProps = {
  ...cellular.defaultProps(),
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
}

export default Column
