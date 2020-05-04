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

// eslint-disable-next-line import/prefer-default-export
export const Message = styled.label(...baseStyles)
