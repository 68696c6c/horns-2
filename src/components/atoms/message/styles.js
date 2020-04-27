import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, typographic } from '../../../traits'

const baseStyles = [
  chromatic.styles,
  typographic.styles,
  () => {
    return css``
  },
]

export const Message = styled.label(...baseStyles)
