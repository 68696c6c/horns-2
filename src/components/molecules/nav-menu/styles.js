import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Nav } from '../../atoms'

// eslint-disable-next-line import/prefer-default-export
export const Menu = styled(Nav)(
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
    `
)
