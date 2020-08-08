import { useEffect, useState } from 'react'
import uuid from 'uuid/v4'

const useID = () => {
  const [id, setID] = useState('')
  useEffect(() => {
    setID(uuid())
  }, [])
  return [id, setID]
}

export default useID
