import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { shadowed } from '../../../traits'
import { Nav, Menu } from '../../atoms'

// @TODO finish styling this component.

export const NavItemMenuContainer = styled.span(
  ({ theme, open }) =>
    open &&
    css`
    > * {
      ${shadowed.styles({ theme })}
    `
)

export const MenuContainer = styled.span(
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

export const SiteNav = styled(Nav)(
  () => css`
    > ${NavItemMenuContainer} {
      display: inline-flex;
      flex-direction: column;
      ${MenuContainer} {
        display: block;
      }
    }
    ${Menu} {
      min-width: 20em;
    }
    ${MenuContainer} {
      ${MenuContainer} {
        text-indent: 1em;
        ${MenuContainer} {
          text-indent: 2em;
        }
      }
    }
  `
)
