import styled from '@emotion/styled'

import { chromatic } from '../../../traits'

import { menu } from '../_base'

const Menu = styled.nav(chromatic.styles, ...menu.styles())

Menu.propTypes = {
  ...chromatic.propTypes(),
  ...menu.propTypes(),
}

Menu.defaultProps = {
  ...chromatic.defaultProps(),
  ...menu.defaultProps(),
}

export default Menu
