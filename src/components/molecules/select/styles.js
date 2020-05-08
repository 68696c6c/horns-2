import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { control } from '../../atoms/_base'

export const Dropdown = styled.ul(({ open }) => {
  return css`
    display: ${open ? 'block' : 'none'};
  `
})
export const Option = styled.li()
export const Select = styled.div(...control.styles())
