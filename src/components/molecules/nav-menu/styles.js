import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Container = styled.div(
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
    `
)

export const DropdownContainer = styled.div(
  () =>
    css`
      position: relative;
    `
)
