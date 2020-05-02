import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { valueToNumber } from '../../../config/utils'
import { Areas, Stack, Columns } from '../../atoms/grid/styles'

export const FormControl = styled(Stack)(({ theme }) => {
  const c = theme.color.getColorway('danger')
  return css`
    .error {
      color: ${c.base.base};
      border-color: ${c.base.base};
    }
  `
})

export const FormControlHorizontal = styled(Areas)(({ multiLine }) => {
  return css`
    ${multiLine
      ? css`
          grid-template-areas:
            'label input'
            'message input';
          input[type='checkbox'],
          input[type='radio'],
          select[multiple],
          textarea {
            grid-row-start: span 2;
            align-self: start;
          }
        `
      : css`
          grid-template-areas:
            'label input'
            'message';
        `};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    label {
      justify-self: center;
    }
  `
})

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
export const ToggleGroupColumns = styled(Columns)()

export const ToggleGroupStack = styled(Stack)()
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
