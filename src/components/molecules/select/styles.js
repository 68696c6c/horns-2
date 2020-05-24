import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  bordered,
  chromaticSurface,
  interactive,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'
import { Input } from '../../atoms'

import { baseControl } from '../../atoms/_base'

// @TODO consider refactoring some of these into styled atoms.
export const SelectContainer = styled.div(
  () =>
    css`
      display: inline-flex;
      flex-direction: column;
    `,
  ({ open }) =>
    open &&
    css`
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.6);
    `
)

export const DropdownContainer = styled.div(
  () =>
    css`
      position: relative;
    `
)

export const Dropdown = styled.ul(
  bordered.styles,
  chromaticSurface.styles,
  margined.styles,
  rounded.styles,
  typographic.styles,
  ({ theme, open }) => {
    return css`
      padding: 0;
      display: ${open ? 'block' : 'none'};
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      position: absolute;
      top: -${theme.borders.getWidthPX()};
      list-style-type: none;
      box-sizing: border-box;
      min-width: 100%;
    `
  },
  ({ open }) =>
    open &&
    css`
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.6);
    `
)

Dropdown.propTypes = {
  ...baseControl.propTypes(),
}

Dropdown.defaultProps = {
  ...baseControl.defaultProps({ cursor: 'pointer' }),
}

export const Option = styled.li(
  chromaticSurface.styles,
  interactive.styles,
  padded.styles
)

Option.propTypes = {
  ...chromaticSurface.propTypes(),
  ...interactive.propTypes(),
  ...padded.propTypes(),
}

Option.defaultProps = {
  ...chromaticSurface.defaultProps(),
  ...interactive.defaultProps(false, false, 'pointer'),
  ...padded.defaultProps({ padding: 'xSmall' }),
}

export const Filter = styled(Input)(
  () => css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `
)

export const OptionFilter = styled.li(chromaticSurface.styles, padded.styles)

OptionFilter.propTypes = {
  ...chromaticSurface.propTypes(),
  ...padded.propTypes(),
}

OptionFilter.defaultProps = {
  ...chromaticSurface.defaultProps(),
  ...padded.defaultProps({ padding: 'xSmall' }),
}

export const Select = styled.div(...baseControl.styles(), ({ open }) => {
  return (
    open &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `
  )
})
