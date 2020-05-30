import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseControl, menu } from '../_base'

const Dropdown = styled.ul(
  ...baseControl.styles(),
  ...menu.styles(),
  ({ theme }) => {
    return css`
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      top: -${theme.borders.getWidthPX()};
      list-style-type: none;
      padding: 0;
    `
  }
)

Dropdown.propTypes = {
  ...baseControl.propTypes(),
  ...menu.propTypes(),
}

Dropdown.defaultProps = {
  ...baseControl.defaultProps(),
  ...menu.defaultProps(),
  cursor: 'pointer',
}

export default Dropdown
