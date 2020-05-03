import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Columns, Stack } from '../../atoms'

const baseStyles = [
  ({ theme }) => {
    const c = theme.color.getColorway('danger')
    return css`
      padding: 0;
      margin-bottom: 1em;
      grid-row-gap: 0.5em;
      .error {
        color: ${c.base.base};
        border-color: ${c.base.base};
        &::placeholder {
          color: ${c.base.base};
        }
      }
    `
  },
]

export const FormControl = styled(Stack)(...baseStyles)

export const FormControlHorizontal = styled(Columns)(
  ...baseStyles,
  () =>
    css`
      align-items: center;
      .label {
        justify-self: end;
      }
      .message {
        justify-self: center;
        grid-column-end: span 2;
      }
    `
)
