import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'

import { grid } from '../_base'

const Areas = styled.div(
  ...grid.styles(),
  contained.styles,
  ({ areas }) => css`
    grid-template-areas: ${areas};
  `
)

Areas.propTypes = {
  ...grid.propTypes(),
}

Areas.defaultProps = {
  ...grid.defaultProps(),
}

export default Areas
