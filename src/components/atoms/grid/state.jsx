import React, { useEffect, useState } from 'react'

import { iterateChildren } from '../../utils'

import Grid, { Column } from './index'

class Position {
  constructor({ base = 0, min = 0, sm = 0, md = 0, lg = 0, max = 0 }) {
    this.base = base
    this.min = min || base
    this.sm = sm || base
    this.md = md || base
    this.lg = lg || base
    this.max = max || base
  }

  add(pos = Position({})) {
    this.base += pos.base
    this.min += pos.min
    this.sm += pos.sm
    this.md += pos.md
    this.lg += pos.lg
    this.max += pos.max
  }
}

const positionFromOffsets = ({
  offset: base,
  offsetMin: min,
  offsetSm: sm,
  offsetMd: md,
  offsetLg: lg,
  offsetMax: max,
}) => new Position({ base, min, sm, md, lg, max })

const positionFromSpans = ({
  span: base,
  spanMin: min,
  spanSm: sm,
  spanMd: md,
  spanLg: lg,
  spanMax: max,
}) => new Position({ base, min, sm, md, lg, max })

class Row {
  constructor({ children }) {
    // const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const columnPositions = []

    // Iterate over the columns while keeping track of our position on the grid at each breakpoint.
    const currentPosition = new Position({})
    iterateChildren(children, column => {
      // Increment the current position by the offset of the columns.
      const offsets = positionFromOffsets(column.props)
      console.log('initial, offsets', currentPosition, offsets)
      currentPosition.add(offsets)

      // After applying the offset, we have the starting position of the column.
      const columnStart = new Position(currentPosition)
      columnPositions.push(columnStart)
      console.log('start position', columnStart)

      // Increment the current position by the span of the column.
      const spans = positionFromSpans(column.props)
      currentPosition.add(spans)
      console.log('spans, end position', spans, currentPosition)
    })

    this.columns = columnPositions
  }
}

const GridContainer = ({ children }) => {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const result = []
    iterateChildren(children, r => {
      result.push(new Row(r.props))
    })
    setPositions(result)
  }, [])

  return (
    <div>
      {positions.map(row => (
        <Grid {...row.props}>
          {row.columns.map(column => (
            <Column {...column.props} />
          ))}
        </Grid>
      ))}
    </div>
  )
}
