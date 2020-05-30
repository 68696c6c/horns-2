// behavior for opening and closing components like nav menus and custom selects
// should emit events

import { useCallback, useEffect, useState } from 'react'

const useOpen = (initialOpen, isTarget) => {
  const [open, setOpen] = useState(initialOpen)

  const handleClick = useCallback(event => {
    if (isTarget(event.target)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  })

  return [open, setOpen]
}

export default useOpen
