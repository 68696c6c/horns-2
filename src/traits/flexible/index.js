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
    value = colMap[value]
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
    value = colMap[value]
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

const getFlexCSS = ({
  theme,
  breakpoint,
  direction,
  justify,
  items,
  content,
  flexWrap,
  reversed,
}) => css`
  flex-direction: ${reversed ? `${direction}-reversed` : direction};
  justify-content: ${getJustifyContent(justify, direction)};
  align-items: ${getAlignItems(items, direction)};
  align-content: ${getAlignContent(content)};
  flex-wrap: ${flexWrap && 'wrap'};
  ${getDisplayCSS(theme, breakpoint)}

  > * {
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: auto;
  }
`

export const flexibleRow = {
  styles: ({ x, y, ...others }) =>
    getFlexCSS({ ...others, justify: x, items: y, direction: 'row' }),
  propTypes: () => ({
    // breakpoint is granted by the responsive trait.
    x: PropTypes.oneOf(flexProperties.row.x),
    y: PropTypes.oneOf(flexProperties.row.y),
    reversed: PropTypes.bool,
    flexWrap: PropTypes.bool,
  }),
  defaultProps: () => ({
    x: null,
    y: null,
    content: null,
    reversed: false,
    flexWrap: false,
  }),
}

export const flexibleColumn = {
  styles: ({ x, y, ...others }) =>
    getFlexCSS({ ...others, justify: y, items: x, direction: 'column' }),
  propTypes: () => ({
    // breakpoint is granted by the responsive trait.
    x: PropTypes.oneOf(flexProperties.column.x),
    y: PropTypes.oneOf(flexProperties.column.y),
    content: PropTypes.oneOf(flexProperties.content),
    reversed: PropTypes.bool,
    flexWrap: PropTypes.bool,
  }),
  defaultProps: () => ({
    x: null,
    y: null,
    content: null,
    reversed: false,
    flexWrap: false,
  }),
}
