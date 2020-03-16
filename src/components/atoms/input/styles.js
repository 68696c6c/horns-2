import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { bordered, chromaticSurface, margined, padded } from '../../../traits'

const baseStyles = [
  bordered.styles,
  chromaticSurface.styles,
  margined.styles,
  padded.styles,
]

export const Input = styled.input(...baseStyles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(...baseStyles)
