import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { shadowed } from '../../../traits'

export const Container = styled.div()

export const AccordionControl = styled.div()

export const AccordionContent = styled.section(
  ({ active }) =>
    !active &&
    css`
      display: none;
    `
)
