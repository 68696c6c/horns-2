import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseControl, menu } from '../_base'

const Dropdown = styled.ul(
  ...baseControl.styles(),
  ...menu.styles(),
  ({ theme }) => css`
    border-top: none;
    top: -${theme.borders.getWidthPX()};
    list-style-type: none;
    padding: 0;
  `
)

Dropdown.propTypes = {
  ...baseControl.propTypes(),
  ...menu.propTypes(),
}

Dropdown.defaultProps = {
  ...baseControl.defaultProps(),
  ...menu.defaultProps(),
  cursor: 'pointer',
  radiusTop: 'min',
}

export default Dropdown
