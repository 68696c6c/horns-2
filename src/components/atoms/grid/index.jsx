/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps, isUndefined, isArray } from '../../utils'

import * as Styled from './styles'

export const gridVariants = ['areas', 'halves', 'thirds']

const getPosition = ({offsetBase, spanBase, offset, span}) => {
  let result = 0
  result += offset ? offset : offsetBase
  result += span ? span : spanBase
  return result
}

const Grid = ({ children, variant, ...others }) => {
  const columns = (isArray(children) ? children : [children]).filter(
    c => !isUndefined(c.type)
  )

  const [positions, setPositions] = useState([])

  useEffect(() => {
    const result = []
    let position = 0
    let positionMin = 0
    let positionSm = 0
    let positionMd = 0
    let positionLg = 0
    let positionMax = 0
    columns.forEach(child => {
      const {
        span,
        spanMin,
        spanSm,
        spanMd,
        spanLg,
        spanMax,
        offset,
        offsetMin,
        offsetSm,
        offsetMd,
        offsetLg,
        offsetMax
      } = child.props
      position += getPosition({ offsetBase: offset, spanBase: span })
      positionMin += getPosition({ offsetBase: offset, spanBase: span, offset: offsetMin, span: spanMin })
      positionSm += getPosition({ offsetBase: offset, spanBase: span, offset: offsetSm, span: spanSm })
      positionMd += getPosition({ offsetBase: offset, spanBase: span, offset: offsetMd, span: spanMd })
      positionLg += getPosition({ offsetBase: offset, spanBase: span, offset: offsetLg, span: spanLg })
      positionMax += getPosition({ offsetBase: offset, spanBase: span, offset: offsetMax, span: spanMax })
      const pos = {
        base: position,
        min: positionMin,
        sm: positionSm,
        md: positionMd,
        lg: positionLg,
        max: positionMax,
      }
      result.push(pos)
    })
    setPositions(result)
  }, [])

  return (
    <Styled.Grid {...handleProps(others, 'grid')}>
      {columns.map((child, index) => (
        <Column {...child.props} position={positions[index]} />
      ))}
    </Styled.Grid>
  )
}

Grid.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(gridVariants),
  smallSide: PropTypes.oneOf(['left', 'right']),
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

const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const Column = props => <Styled.Column {...props} />

Column.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  position: PropTypes.oneOf([0, ...spans]),
  span: PropTypes.oneOf(spans),
  spanMin: PropTypes.oneOf([null, ...spans]),
  spanSm: PropTypes.oneOf([null, ...spans]),
  spanMd: PropTypes.oneOf([null, ...spans]),
  spanLg: PropTypes.oneOf([null, ...spans]),
  spanMax: PropTypes.oneOf([null, ...spans]),
  offset: PropTypes.oneOf(offsets),
  offsetMin: PropTypes.oneOf([null, ...offsets]),
  offsetSm: PropTypes.oneOf([null, ...offsets]),
  offsetMd: PropTypes.oneOf([null, ...offsets]),
  offsetLg: PropTypes.oneOf([null, ...offsets]),
  offsetMax: PropTypes.oneOf([null, ...offsets]),
}

Column.defaultProps = {
  ...chromatic.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  position: 0,
  span: 1,
  spanMin: null,
  spanSm: null,
  spanMd: null,
  spanLg: null,
  spanMax: null,
  offset: 0,
  offsetMin: null,
  offsetSm: null,
  offsetMd: null,
  offsetLg: null,
  offsetMax: null,
}
