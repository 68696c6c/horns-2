import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bordered } from '../../../traits/bordered'
import { chromaticSurface } from '../../../traits/chromatic'
import { gridded } from '../../../traits/gridded'
import { interactive } from '../../../traits/interactive'
import { margined } from '../../../traits/margined'
import { rounded } from '../../../traits/rounded'
import { typographic } from '../../../traits/typographic'

import { control, list } from '../../atoms/_base'

export const SelectContainer = styled.div(
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
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
  gridded.styles,
  ({ theme, open }) => {
    const spacing = theme.sizing.getPX('xSmall')
    const width = theme.borders.getWidthPX()
    return css`
      display: ${open ? 'grid' : 'none'};
      grid-template-rows: auto;
      padding-left: ${spacing};
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      position: absolute;
      top: -${width};
      cursor: pointer;
      width: 100%;
      box-sizing: border-box;
    `
  }
)

Dropdown.defaultProps = {
  ...control.defaultProps(),
  ...gridded.defaultProps(true, 'xxSmall'),
  type: 'none',
}

export const Option = styled.li()
export const Select = styled.div(...control.styles(), ({ open }) => {
  return (
    open &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      cursor: pointer;
    `
  )
})
