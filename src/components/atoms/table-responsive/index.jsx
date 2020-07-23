import React from 'react'
import PropTypes from 'prop-types'

import { responsive } from '../../../traits'
import { table } from '../../../macros'
import { useID, useRowIDs } from '../../../hooks'

import Overflow from '../overflow'
import * as Styled from './styles'

const TableResponsive = ({ height, minWidth, rowData }) => {
  const [tableID] = useID()
  const [rowIDs] = useRowIDs(rowData)

  if (rowData && rowData.length > 0) {
    return (
      <Overflow height={height} x="scroll">
        <Styled.TableResponsive minWidth={minWidth}>
          <thead>
            <tr>
              {Object.keys(rowData[0]).map(colName => (
                <th key={`table-${tableID}-${colName}`}>{colName}</th>
              ))}
            </tr>
          </thead>
          {rowData.map((row, rowIndex) => {
            const rowKey = rowIDs.length
              ? `table-${tableID}-row-${rowIDs[rowIndex]}`
              : `table-${tableID}-row-${rowIndex}`
            return (
              <tbody key={rowKey}>
                {Object.keys(row).map(colName => (
                  <tr>
                    <th>{colName}</th>
                    <td>{row[colName]}</td>
                  </tr>
                ))}
              </tbody>
            )
          })}
        </Styled.TableResponsive>
      </Overflow>
    )
  }
  return (
    <Overflow height={height} x="scroll">
      <table>
        <thead>
          <tr>
            <td>No data.</td>
          </tr>
        </thead>
      </table>
    </Overflow>
  )
}

TableResponsive.propTypes = {
  ...table.propTypes(),
  ...responsive.propTypes(),
  rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

TableResponsive.defaultProps = {
  ...table.defaultProps(),
  ...responsive.defaultProps(),
}

export default TableResponsive
