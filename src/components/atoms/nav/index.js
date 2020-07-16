import styled from '@emotion/styled'

import { chromatic } from '../../../traits'

import { menu } from '../_base'

const Nav = styled.nav(chromatic.styles, ...menu.styles())

Nav.propTypes = {
  ...chromatic.propTypes(),
  ...menu.propTypes(),
}

Nav.defaultProps = {
  ...chromatic.defaultProps(),
  ...menu.defaultProps(),
}

export default Nav
