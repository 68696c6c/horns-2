import { css } from '@emotion/core'
import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { baseControl } from './utils'

export const Input = styled.input(...baseControl.styles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(...baseControl.styles)

export const Toggle = styled.input(({ theme, tone, type }) => {
  const c = theme.color.getBackground(tone)
  const roundCSS =
    type === 'radio' &&
    css`
      border-radius: 50%;
    `
  return css`
    display: none;
    font-size: 1em;
    vertical-align: baseline;
    margin: 0 1em 0 0;
    height: 1em;
    ${roundCSS};
    ~ label.toggle-label,
    ~ label.toggle-message {
      vertical-align: middle;
      display: inline-block;
    }
    &:checked + label.toggle-control {
      background: ${c.active.base};
    }
    &:disabled + label.toggle-control {
      background: ${c.inactive.base};
      cursor: not-allowed;
    }
    &:disabled + label.toggle-control + label.toggle-label {
      cursor: not-allowed;
    }
  `
})

export const ToggleControl = styled.label(
  ...baseControl.styles,
  ({ theme, font }) => {
    const f = theme.typography.getStyle(font)
    return css`
      content: ' ';
      display: inline-block;
      width: ${f.lineHeight};
      min-width: ${f.lineHeight};
      height: ${f.lineHeight};
      vertical-align: middle;
    `
  }
)

export const Select = styled.select``

export const Multiselect = styled.select``
