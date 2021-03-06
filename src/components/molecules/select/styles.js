import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { control } from '../../../macros'
import { Input } from '../../atoms'

export const Filter = styled(Input)(
  () => css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `
)

export const Select = styled.div(
  ...control.styles(),
  ({ open }) =>
    open &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `
)
