import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { control, list } from '../../atoms/_base'

export const SelectContainer = styled.div(
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
      > .control {
        display: block;
      }
    `
)
export const DropdownContainer = styled.div(
  () =>
    css`
      position: relative;
    `
)

export const Dropdown = styled.ul(
  ...control.styles(false),
  ...list.styles(),
  ({ theme, open }) => {
    const spacing = theme.sizing.getPX('xSmall')
    const width = theme.borders.getWidthPX()
    return css`
      display: ${open ? 'grid' : 'none'};
      padding-left: ${spacing};
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      position: absolute;
      top: -${width};
      cursor: pointer;
    `
  }
)

Dropdown.defaultProps = {
  ...control.defaultProps(),
  ...list.defaultProps(),
  type: 'none',
}
export const Option = styled.li()
export const Select = styled.div(...control.styles())
