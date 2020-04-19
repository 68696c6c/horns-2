import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  bordered,
  chromatic,
  chromaticSurface,
  interactive,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'

const merge = require('deepmerge')

const controllableDefaultProps = {
  cursor: 'text',
  font: 'control',
  padding: 'xSmall',
}

// eslint-disable-next-line import/prefer-default-export
export const control = {
  styles: () => [
    bordered.styles,
    chromaticSurface.styles,
    interactive.styles,
    margined.styles,
    padded.styles,
    rounded.styles,
    typographic.styles,
    () =>
      css`
        display: inline-flex;
        box-sizing: content-box;
        vertical-align: middle;
      `,
  ],
  propTypes: () => ({
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...interactive.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  defaultProps: (dp = {}) => {
    const defaultProps = merge({ ...controllableDefaultProps }, dp)
    const { cursor, font, padding } = defaultProps
    return {
      ...bordered.defaultProps(),
      ...chromaticSurface.defaultProps(),
      ...interactive.defaultProps(false, false, cursor),
      ...margined.defaultProps(),
      ...padded.defaultProps({ padding }),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(font),
      placeholder: '',
      required: false,
    }
  },
}

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

export const Input = styled.input(...control.styles(), heightStyles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(
  ...control.styles(),
  heightStyles
)

export const Label = styled.label(
  chromatic.styles,
  margined.styles,
  typographic.styles
)

export const Select = styled.select(
  ...control.styles(),
  selectStyles,
  heightStyles
)
export const Multiselect = styled.select(...control.styles(), selectStyles)

export const Textarea = styled.textarea(...control.styles())

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
  ...control.styles(),
  ({ type }) =>
    css`
      content: ' ';
      ${type === 'radio' &&
        css`
          border-radius: 50%;
        `}
    `
)
