import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { flexProperties } from '../../config'

const getJustifyContent = (justify, direction) => {
  let value = justify
  const rowMap = { left: 'start', right: 'end' }
  const colMap = { top: 'start', bottom: 'end' }
  if (direction === 'row' && Object.keys(rowMap).includes(value)) {
    value = rowMap[value]
  } else if (direction === 'column' && Object.keys(colMap).includes(value)) {
    value = rowMap[value]
  }
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'around':
      return 'space-around'
    case 'between':
      return 'space-between'
    case 'evenly':
      return 'space-evenly'
    default:
      return null
  }
}

const getAlignItems = (items, direction) => {
  let value = items
  const rowMap = { top: 'start', bottom: 'end' }
  const colMap = { left: 'start', right: 'end' }
  if (direction === 'row' && Object.keys(rowMap).includes(value)) {
    value = rowMap[value]
  } else if (direction === 'column' && Object.keys(colMap).includes(value)) {
    value = rowMap[value]
  }
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'stretch':
      return 'stretch'
    case 'baseline':
      return 'baseline'
    default:
      return null
  }
}

const getAlignContent = content => {
  switch (content) {
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'stretch':
      return 'stretch'
    case 'around':
      return 'space-around'
    case 'between':
      return 'space-between'
    case 'evenly':
      return 'space-evenly'
    default:
      return null
  }
}

const getDisplayCSS = (theme, breakpoint) => {
  return breakpoint
    ? css`
        display: block;
        ${theme.grid.break(breakpoint)} {
          display: flex;
        }
      `
    : css`
        display: flex;
      `
}

export const flexible = {
  styles: ({
    theme,
    breakpoint,
    direction,
    reversed,
    x,
    y,
    content,
    wrap,
  }) => {
    let justify = x
    let items = y
    if (direction === 'column') {
      justify = y
      items = x
    }
    return css`
      flex-direction: ${reversed ? `${direction}-reversed` : direction};
      justify-content: ${getJustifyContent(justify, direction)};
      align-items: ${getAlignItems(items, direction)};
      align-content: ${getAlignContent(content)};
      flex-wrap: ${wrap};
      ${getDisplayCSS(theme, breakpoint)}

      > * {
        flex-shrink: 1;
        flex-grow: 0;
        flex-basis: auto;
      }
    `
  },
  propTypes: direction => ({
    // breakpoint is granted by the responsive trait.
    direction: PropTypes.oneOf(['column', 'row']).isRequired,
    reversed: PropTypes.bool,
    wrap: PropTypes.bool,
    x: PropTypes.oneOf(flexProperties[direction].x),
    y: PropTypes.oneOf(flexProperties[direction].y),
    content: PropTypes.oneOf(flexProperties.content),
  }),
  defaultProps: (
    reversed = false,
    wrap = false,
    x = null,
    y = null,
    content = null
  ) => ({
    reversed,
    wrap,
    x,
    y,
    content,
  }),
}

export const flexibleChild = {
  styles: ({ order, grow, shrink, basis, self }) => {
    return css`
      order: ${order};
      flex-grow: ${grow};
      flex-shrink: ${shrink};
      flex-basis: ${basis};
      align-self: ${self};
    `
  },
  propTypes: () => ({
    // breakpoint is granted by the responsive trait.
    order: PropTypes.number,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.oneOfType([null, PropTypes.number, PropTypes.string]),
    self: PropTypes.oneOf([
      null,
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ]),
  }),
  defaultProps: (
    order = 0,
    grow = 0,
    shrink = 0,
    basis = null,
    self = null
  ) => ({
    order,
    grow,
    shrink,
    basis,
    self,
  }),
}
