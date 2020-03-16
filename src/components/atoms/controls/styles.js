import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { baseControl } from './utils'

export const Input = styled.input(...baseControl.styles)
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(...baseControl.styles)
