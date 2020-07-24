import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'
import { grid } from '../../../macros'

const Stack = styled.div(
  ...grid.styles(),
  contained.styles,
  () => css`
    grid-template-rows: auto;
  `
)

Stack.propTypes = {
  ...grid.propTypes(),
}

Stack.defaultProps = {
  ...grid.defaultProps(),
}

export default Stack
