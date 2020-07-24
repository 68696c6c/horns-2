import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { navItem } from '../../../macros'

const NavItemUnderline = styled.a(...navItem.styles(), ({ current }) => {
  return (
    current &&
    css`
      text-decoration: underline !important;
    `
  )
})

NavItemUnderline.propTypes = { ...navItem.propTypes() }

NavItemUnderline.defaultProps = { ...navItem.defaultProps() }

export default NavItemUnderline
