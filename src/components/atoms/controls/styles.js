import { css } from '@emotion/core'
import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { chromatic, margined, padded, typographic } from '../../../traits'

import { baseControl } from './utils'

const heightStyles = ({ theme, font }) => {
  // Force the element height to match the line-height to ensure that inputs that have controls
  // inside them (e.g. type="datetime-local") don't end up a different size than standard inputs.
  const f = theme.typography.getStyle(font)
  return css`
    height: ${f.lineHeight};
    min-width: ${f.lineHeight};
  `
}

const selectStyles = () => css`
  appearance: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`

export const Input = styled.input(baseControl.styles, heightStyles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(baseControl.styles, heightStyles)

export const Label = styled.label(
  chromatic.styles,
  margined.styles,
  typographic.styles
)

export const Select = styled.select(
  baseControl.styles,
  selectStyles,
  heightStyles
)
export const Multiselect = styled.select(baseControl.styles, selectStyles)

export const Textarea = styled.textarea(baseControl.styles)

export const Toggle = styled.input(({ theme, tone }) => {
  const c = theme.color.getBackground(tone)
  return css`
    display: none;
    ~ label.toggle-label,
    ~ label.toggle-message {
      vertical-align: middle;
      display: inline-block;
    }
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
  baseControl.styles,
  ({ type }) =>
    css`
      content: ' ';
      ${type === 'radio' &&
        css`
          border-radius: 50%;
        `}
    `
)
