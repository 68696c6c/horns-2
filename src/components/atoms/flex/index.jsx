import React from 'react'

import {
  chromatic,
  flexibleColumn,
  flexibleRow,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

const flexProps = {
  propTypes: {
    ...chromatic.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...responsive.propTypes(),
  },
  defaultProps: {
    ...chromatic.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...responsive.defaultProps(),
  },
}

export const FlexRow = props => (
  <Styled.FlexRow {...handleProps(props, 'flex-row')} />
)

FlexRow.propTypes = {
  ...flexProps.propTypes,
  ...flexibleRow.propTypes(),
}

FlexRow.defaultProps = {
  ...flexProps.defaultProps,
  ...flexibleRow.defaultProps('evenly', 'center'),
}

export const FlexColumn = props => (
  <Styled.FlexColumn {...handleProps(props, 'flex-column')} />
)

FlexColumn.propTypes = {
  ...flexProps.propTypes,
  ...flexibleColumn.propTypes(),
}

FlexColumn.defaultProps = {
  ...flexProps.defaultProps,
  ...flexibleColumn.defaultProps('center', 'evenly'),
}
