/* eslint-disable react/jsx-props-no-spreading,default-case */
import React from 'react'
import PropTypes from 'prop-types'

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

export const gridVariants = ['areas', 'columns', 'grid', 'halves', 'thirds']

const BaseGrid = ({ children, variant, ...others }) => {
  const props = { ...others }
  let Tag
  let className
  switch (variant) {
    case 'halves':
      Tag = Styled.Halves
      className = 'grid-halves'
      break
    case 'thirds':
      Tag = Styled.Thirds
      className = 'grid-thirds'
      break
    case 'areas':
      Tag = Styled.Areas
      className = 'grid-areas'
      break
    case 'columns':
      Tag = Styled.Columns
      className = 'columns'
      break
    case 'grid':
      Tag = Styled.Grid
      className = 'grid'
      break
  }
  return <Tag {...handleProps(props, className)}>{children}</Tag>
}

BaseGrid.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(gridVariants),
  reversed: PropTypes.bool,
}

BaseGrid.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...gridded.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'grid',
  reversed: false,
}

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

export const Area = props => <Styled.Area {...props} />
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

const Grid = props => <BaseGrid columns={12} gapped {...props} variant="grid" />
export default Grid

export const Areas = props => <BaseGrid {...props} variant="areas" />
export const Columns = props => <BaseGrid {...props} variant="columns" />
export const Halves = props => <BaseGrid {...props} variant="halves" />
export const Thirds = props => <BaseGrid {...props} variant="thirds" />
