/* global window */
import { useEffect, useState } from 'react'
import { useTheme } from 'emotion-theming'

const useBreakpoint = (breakpoint) => {
  const theme = useTheme()

  // Initialize state with undefined width/height so server and client renders match.
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const breakInt = theme.grid.getBreakpointInt(breakpoint)
    if (windowSize.width <= breakInt && !isMobile) {
      setIsMobile(true)
    } else if (windowSize.width > breakInt && isMobile) {
      setIsMobile(false)
    }
  }, [windowSize])

  return isMobile
}

export default useBreakpoint
