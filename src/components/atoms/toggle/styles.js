import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { control } from '../_base'

export const Toggle = styled.input(({ theme, tone }) => {
  const c = theme.color.getBackground(tone)
  return css`
    display: none;
    &:checked + label.control {
      background: ${c.active.base};
    }
    &:disabled + label.control {
      background: ${c.inactive.base};
      cursor: not-allowed;
    }
    &:disabled + label.control + label.toggle-label {
      cursor: not-allowed;
    }
  `
})

export const ToggleControl = styled.label(
  ...control.styles(false),
  ({ type }) =>
    css`
      content: ' ';
      ${type === 'radio' &&
        css`
          border-radius: 50%;
        `}
    `
)
