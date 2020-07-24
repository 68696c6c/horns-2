import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contained } from '../../../traits'
import { grid } from '../../../macros'

const Columns = styled.div(
  ...grid.styles(),
  contained.styles,
  ({ theme, columns }) => {
    let template = `repeat(${columns}, 1fr)`
    if (columns === 0) {
      const min = theme.grid.getColumnMin()
      template = `repeat(auto-fit, minmax(${min}, 1fr))`
    }
    return css`
      grid-template-columns: ${template};
    `
  }
)

Columns.propTypes = {
  ...grid.propTypes(),
  columns: PropTypes.number,
}

Columns.defaultProps = {
  ...grid.defaultProps(),
  columns: 0,
}

export default Columns
