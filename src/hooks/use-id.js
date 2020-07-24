import { useEffect, useState } from 'react'
import uuid from 'uuid/v4'

const useRowIDs = () => {
  const [id, setID] = useState('')
  useEffect(() => {
    setID(uuid())
  }, [])
  return [id, setID]
}

export default useRowIDs
