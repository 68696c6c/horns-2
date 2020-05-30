import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { shadowed } from '../../../traits'

export const Container = styled.div(
  ({ theme, open }) => open && shadowed.styles({ theme }),
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
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
