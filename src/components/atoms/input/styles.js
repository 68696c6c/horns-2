import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { chromaticSurface, margined, padded } from '../../../traits'

const baseStyles = [chromaticSurface.styles, margined.styles, padded.styles]

export const Input = styled.input(...baseStyles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(...baseStyles)
