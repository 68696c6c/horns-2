import styled from '@emotion/styled'

import { chromatic, interactive } from '../../../traits'
import { navItem } from '../../../macros'

const NavItemColorway = styled.a(
  ...navItem.styles(),
  ({ theme, current, currentColor }) => {
    if (current) {
      return [
        chromatic.styles({ theme, color: currentColor }),
        interactive.styles({ theme, color: currentColor }),
      ]
    }
    return null
  }
)

NavItemColorway.propTypes = { ...navItem.propTypes() }

NavItemColorway.defaultProps = { ...navItem.defaultProps() }

export default NavItemColorway
