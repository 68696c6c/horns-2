import styled from '@emotion/styled'

import { chromatic } from '../../../traits'
import { navItem } from '../../../macros'

const NavItemBackground = styled.a(
  ...navItem.styles(),
  ({ theme, current, color, currentColor }) => {
    const cc = current ? currentColor : color
    return chromatic.styles({ theme, color: cc, typographic: false })
  }
)

NavItemBackground.propTypes = { ...navItem.propTypes() }

NavItemBackground.defaultProps = { ...navItem.defaultProps() }

export default NavItemBackground
