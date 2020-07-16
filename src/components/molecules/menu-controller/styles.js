import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { shadowed } from '../../../traits'

export const Container = styled.div(
  ({ theme, open }) => open && shadowed.styles({ theme }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      min-width: ${minWidth && `${minWidth}px`};
    `
)

export const MenuContainer = styled.div(
  () =>
    css`
      position: relative;
    `,
  ({ theme, open }) =>
    open &&
    css`
    > * {
      ${shadowed.styles({ theme })}
    `
)
