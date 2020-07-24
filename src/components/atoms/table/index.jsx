import React from 'react'
import PropTypes from 'prop-types'

import { table } from '../../../macros'
import { useID, useRowIDs } from '../../../hooks'

import Overflow from '../overflow'
import * as Styled from './styles'

const Table = ({ children, height, minWidth, rowData }) => {
  const [tableID] = useID()
  const [rowIDs] = useRowIDs(rowData)

  if (rowData && rowData.length > 0) {
    return (
      <Overflow height={height} x="scroll">
        <Styled.Table minWidth={minWidth}>
          <thead>
            <tr>
              {Object.keys(rowData[0]).map(colName => (
                <th key={`table-${tableID}-${colName}`}>{colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, rowIndex) => {
              const rowKey = rowIDs.length
                ? `table-${tableID}-row-${rowIDs[rowIndex]}`
                : `table-${tableID}-row-${rowIndex}`
              return (
                <tr key={rowKey}>
                  {Object.keys(row).map(colName => (
                    <td key={`${rowKey}-${colName}`}>{row[colName]}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </Styled.Table>
      </Overflow>
    )
  }
  return (
    <Overflow height={height} x="scroll">
      <Styled.Table minWidth={minWidth}>{children}</Styled.Table>
    </Overflow>
  )
}

Table.propTypes = {
  ...table.propTypes(),
  rowData: PropTypes.arrayOf(PropTypes.object),
}

Table.defaultProps = {
  ...table.defaultProps(),
  rowData: [],
}

export default Table
