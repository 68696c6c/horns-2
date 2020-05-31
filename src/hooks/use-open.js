import { useCallback, useEffect, useState } from 'react'

const useOpen = (initialOpen, isTarget) => {
  const [open, setOpen] = useState(initialOpen)

  const handleClick = useCallback(event => {
    if (isTarget(event.target)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener('click', handleClick)
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('click', handleClick)
    }
  })

  return [open, setOpen]
}

export default useOpen
