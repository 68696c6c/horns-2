import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { chromatic } from '../../../traits'
import { Nav, Menu } from '../../atoms'

import { Container } from '../menu-controller/styles'
import { getNavItemTag } from '../utils'

// @TODO finish styling this component.
// eslint-disable-next-line import/prefer-default-export
export const SiteNav = styled(Nav)(({ theme, color, variant }) => {
  const Tag = getNavItemTag(variant)
  return css`
    ${Tag} {
      ${chromatic.styles({ theme, color })}
    }
    ${Container} ${Container} {
      width: 100%;
    }
    ${Menu} {
      min-width: 20em;
    }
  `
})
