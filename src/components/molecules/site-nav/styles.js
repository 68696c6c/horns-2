import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { chromatic } from '../../../traits'
import { getNavItemTag } from '../../../macros'
import { Nav } from '../../atoms'

// @TODO finish styling this component.
// eslint-disable-next-line import/prefer-default-export
export const SiteNav = styled(Nav)(({ theme, color, variant }) => {
  const Tag = getNavItemTag(variant)
  return css`
    ${Tag} {
      ${chromatic.styles({ theme, color })}
    }
  `
})
