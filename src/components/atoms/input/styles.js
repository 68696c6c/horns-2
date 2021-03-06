import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { control } from '../../../macros'

export const Input = styled.input(...control.styles())
export const InputHidden = styled.input()

// If we pass these props to the MaskedInput they will produce a console error about React not recognizing the prop on a DOM node.
const hornsProps = [
  'borderAll',
  'borderX',
  'borderY',
  'borderTop',
  'borderBottom',
  'borderLeft',
  'borderRight',
  'margin',
  'marginX',
  'marginY',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'paddingConfig',
  'padding',
  'paddingX',
  'paddingY',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'inactive',
  'typographic',
]
export const InputMasked = styled(MaskedInput, {
  shouldForwardProp: prop => !hornsProps.includes(prop),
})(...control.styles())
