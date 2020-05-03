import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { valueToNumber } from '../../../config/utils'
// import { Columns, Stack } from '../../atoms/grid/styles'

export const ToggleGroupFlex = styled.div(({ theme, length, horizontal }) => {
  if (!horizontal && length <= 5) {
    return css``
  }
  const { lineHeight } = theme.typography.getStyle('label')
  const line =
    valueToNumber(lineHeight) * valueToNumber(theme.typography.config.sizes.max)
  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: ${line * 2.5}px;
    > * {
      display: inline-flex;
      align-items: center;
      margin-top: -0.25em;
    }
  `
})
// export const ToggleGroupColumns = styled(Columns)()
//
// export const ToggleGroupStack = styled(Stack)()
export const ToggleGroupOption = styled.div(() => {
  return css`
    .label {
      margin-inline-start: 0.333em;
      margin-inline-end: 0.6666em;
    }
    .control {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  `
})
