import { useEffect, useState } from 'react'
import uuid from 'uuid/v4'

const useRowIDs = (rowData = []) => {
  const [rowIDs, setRowIDs] = useState([])
  useEffect(() => {
    setRowIDs(rowData.map(() => uuid()))
  }, [rowData])

  return [rowIDs, setRowIDs]
}

export default useRowIDs
