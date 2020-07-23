import styled from '@emotion/styled'

import { chromatic } from '../../../traits'

import { navItem } from '../_base'

const NavItemBackground = styled.a(
  ...navItem.styles(),
  ({ theme, current, currentColor, typographic }) =>
    current && chromatic.styles({ theme, typographic, color: currentColor })
)

NavItemBackground.propTypes = { ...navItem.propTypes() }

NavItemBackground.defaultProps = { ...navItem.defaultProps() }

export default NavItemBackground
