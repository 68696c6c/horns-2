import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { responsive } from '.'

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div(...responsive.styles, ({ theme, breakpoint }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    background-color: red;
    color: white;
    padding: 1em;
    &::after {
      content: " Window is less than ${minWidth}";
    }
    ${theme.grid.break(breakpoint)} {
      background-color: orange;
      &::after {
        content: " Window is greater than ${minWidth}";
      }
    }
  `
})
Box.propTypes = responsive.propTypes()
Box.defaultProps = responsive.defaultProps()
