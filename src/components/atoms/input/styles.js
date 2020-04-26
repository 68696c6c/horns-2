import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { control } from '../../hadrons'

export const Input = styled.input(...control.styles())
export const InputHidden = styled.input()
export const InputMasked = styled(MaskedInput)(...control.styles())
