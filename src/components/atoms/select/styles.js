import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { control } from '../../hadrons'

const selectStyles = () => css`
  appearance: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
`

export const Select = styled.select(...control.styles(), selectStyles)
export const Multiselect = styled.select(...control.styles(false), selectStyles)
