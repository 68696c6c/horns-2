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

const getPosition = (offset, span) => {
  return offset + span
}

// @TODO hoist the stateful part up to a GridContainer and treat this component as a stateless row.
const Grid = ({ children, variant, ...others }) => {
  const columns = (isArray(children) ? children : [children]).filter(
    c => !isUndefined(c.type)
  )

  const [positions, setPositions] = useState([])

  useEffect(() => {
    const result = []
    const position = {
      base: 0,
      min: 0,
      sm: 0,
      md: 0,
      lg: 0,
      max: 0,
    }
    const colCount = {
      base: 0,
      min: 0,
      sm: 0,
      md: 0,
      lg: 0,
      max: 0,
    }

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
        offsetMax,
      } = child.props
      console.log('------------------')
      // console.log('offset', {
      //   offset,
      //   offsetMin,
      //   offsetSm,
      //   offsetMd,
      //   offsetLg,
      //   offsetMax,
      // })
      // console.log('span', {
      //   span,
      //   spanMin,
      //   spanSm,
      //   spanMd,
      //   spanLg,
      //   spanMax,
      // })
      const offsets = {
        base: offset,
        min: offsetMin || offset,
        sm: offsetSm || offset,
        md: offsetMd || offset,
        lg: offsetLg || offset,
        max: offsetMax || offset,
      }
      console.log('offsets', offsets)
      colCount.base += offsets.base
      colCount.min += offsets.min
      colCount.sm += offsets.sm
      colCount.md += offsets.md
      colCount.lg += offsets.lg
      colCount.max += offsets.max
      console.log('colCount', colCount)

      position.base = colCount.base
      position.min = colCount.min
      position.sm = colCount.sm
      position.md = colCount.md
      position.lg = colCount.lg
      position.max = colCount.max
      const pos = { ...position }
      console.log('pos', pos)

      const spans = {
        base: span,
        min: spanMin || span,
        sm: spanSm || span,
        md: spanMd || span,
        lg: spanLg || span,
        max: spanMax || span,
      }
      console.log('spans', spans)
      colCount.base += spans.base
      colCount.min += spans.min
      colCount.sm += spans.sm
      colCount.md += spans.md
      colCount.lg += spans.lg
      colCount.max += spans.max
      console.log('colCount', colCount)
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
  position: PropTypes.oneOf([...spans]),
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
  position: 1,
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
