import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { valueToNumber } from '../../../config/utils'

export const ToggleGroupFlex = styled.div(({ theme, length, horizontal }) => {
  if (!horizontal && length <= 5) {
    return css``
  }
  // @TODO something more intelligent here
  const rows = 5
  // @TODO this margin should be locked to the margin used in ToggleGroupOption
  const margin = theme.sizing.getPX('xxSmall')
  const borderWidth = theme.borders.getWidthPX()
  const { y } = theme.padding.getValues('controls')
  const lineHeight =
    valueToNumber(borderWidth) * 2 +
    valueToNumber(y) * 2 +
    valueToNumber(margin)

  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-height: ${lineHeight * rows}px;
    > * {
      display: inline-flex;
      align-items: center;
      margin-top: -${margin};
    }
  `
})
// export const ToggleGroupColumns = styled(Columns)()
//
// export const ToggleGroupStack = styled(Stack)()
export const ToggleGroupOption = styled.div(({ theme }) => {
  const margin = theme.sizing.getPX('xxSmall')
  return css`
    .label {
      margin-inline-start: 0.333em;
      margin-inline-end: 0.6666em;
    }
    .control {
      margin-top: ${margin};
      margin-bottom: ${margin};
    }
  `
})
