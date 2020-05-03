import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Areas } from '../../atoms/areas/styles'
import { Stack } from '../../atoms/stack/styles'

export const FormControl = styled(Stack)(({ theme }) => {
  const c = theme.color.getColorway('danger')
  return css`
    .error {
      color: ${c.base.base};
      border-color: ${c.base.base};
    }
  `
})

FormControl.defaultProps = {
  fluid: true,
}

export const FormControlHorizontal = styled(Areas)(({ multiLine }) => {
  return css`
    ${multiLine
      ? css`
          grid-template-areas:
            'label input'
            'message input';
          input[type='checkbox'],
          input[type='radio'],
          select[multiple],
          textarea {
            grid-row-start: span 2;
            align-self: start;
          }
        `
      : css`
          grid-template-areas:
            'label input'
            'message';
        `};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    label {
      justify-self: center;
    }
  `
})

FormControlHorizontal.defaultProps = {
  fluid: true,
}
