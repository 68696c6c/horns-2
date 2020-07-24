import {
  NavItemBackground,
  NavItemBorder,
  NavItemColorway,
  NavItemUnderline,
} from '../atoms'

// This can't live in macros because it needs to import atoms, which causes an import cycle.
// eslint-disable-next-line import/prefer-default-export
export const getNavItemTag = variant => {
  const map = {
    background: NavItemBackground,
    border: NavItemBorder,
    colorway: NavItemColorway,
    underline: NavItemUnderline,
  }
  return map[variant] || NavItemBorder
}
