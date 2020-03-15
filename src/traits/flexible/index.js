import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { flexProperties } from '../../config'

export const flexible = {
  styles: ({
    theme,
    breakpoint,
    direction,
    reversed,
    justify,
    items,
    content,
    wrap,
  }) => {
    let justifyContent
    switch (justify) {
      case 'start':
        justifyContent = 'flex-start'
        break
      case 'center':
        justifyContent = 'center'
        break
      case 'end':
        justifyContent = 'flex-end'
        break
      case 'around':
        justifyContent = 'space-around'
        break
      case 'between':
        justifyContent = 'space-between'
        break
      case 'evenly':
        justifyContent = 'space-evenly'
        break
      default:
        justifyContent = null
    }

    let alignItems
    switch (items) {
      case 'start':
        alignItems = 'flex-start'
        break
      case 'center':
        alignItems = 'center'
        break
      case 'end':
        alignItems = 'flex-end'
        break
      case 'stretch':
        alignItems = 'stretch'
        break
      case 'baseline':
        alignItems = 'baseline'
        break
      default:
        alignItems = null
    }

    let alignContent
    switch (content) {
      case 'start':
        alignContent = 'flex-start'
        break
      case 'center':
        alignContent = 'center'
        break
      case 'end':
        alignContent = 'flex-end'
        break
      case 'stretch':
        alignContent = 'stretch'
        break
      case 'around':
        alignContent = 'space-around'
        break
      case 'between':
        alignContent = 'space-between'
        break
      case 'evenly':
        alignContent = 'space-evenly'
        break
      default:
        alignContent = null
    }

    const displayCSS = breakpoint
      ? css`
          display: block;
          ${theme.grid.break(breakpoint)} {
            display: flex;
          }
        `
      : css`
          display: flex;
        `
    let flexDirection = direction
    flexDirection = reversed ? `${flexDirection}-reversed` : flexDirection
    return css`
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      align-content: ${alignContent};
      flex-wrap: ${wrap};
      ${displayCSS}
    `
  },
  propTypes: () => ({
    // breakpoint is granted by the responsive trait.
    direction: PropTypes.oneOf(['row', 'column']),
    reversed: PropTypes.bool,
    wrap: PropTypes.oneOf([null, 'nowrap', 'wrap', 'wrap-reverse']),
    justify: PropTypes.oneOf(flexProperties.justify),
    items: PropTypes.oneOf(flexProperties.items),
    content: PropTypes.oneOf(flexProperties.content),
  }),
  defaultProps: (
    direction = 'row',
    reversed = false,
    wrap = null,
    justify = null,
    items = null,
    content = null
  ) => ({
    direction,
    reversed,
    wrap,
    justify,
    items,
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
