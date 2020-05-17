import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { cursors } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const interactive = {
  styles: ({ theme, inactive, typographic, cursor, color, font }) => {
    const c = theme.color.getColorway(color)
    let cs = {
      inactive: {
        background: c.inactive.base,
        color: c.inactive.readable,
        border: c.inactive.border,
      },
      hover: {
        background: c.hover.base,
        color: c.hover.readable,
        border: c.hover.border,
      },
      active: {
        background: c.active.base,
        color: c.active.readable,
        border: c.active.border,
      },
    }
    if (typographic) {
      const isBg = color === 'background'
      cs = {
        inactive: {
          background: null,
          color: isBg ? c.inactive.readable : c.inactive.base,
          border: null,
        },
        hover: {
          background: null,
          color: isBg ? c.hover.readable : c.hover.base,
          border: null,
        },
        active: {
          background: null,
          color: isBg ? c.active.readable : c.active.base,
          border: null,
        },
      }
    }
    const s = theme.typography.getStyle(font)
    const inactiveCSS = css`
      cursor: ${cursor};
      background: ${cs.inactive.background};
      color: ${cs.inactive.color};
      border-color: ${cs.inactive.border};
      text-decoration-line: ${s.inactive.textDecorationLine};
      text-decoration-style: ${s.inactive.textDecorationStyle};
    `
    if (inactive) {
      return inactiveCSS
    }
    // @TODO the inactiveCSS interpolation is somehow causing emotion to add a class name of 'inactiveCSS'.
    return css`
      cursor: ${cursor};
      &:disabled,
      &.inactive {
        ${inactiveCSS}
      }
      &:not(:disabled):not(.inactive):hover {
        background: ${cs.hover.background};
        color: ${cs.hover.color};
        border-color: ${cs.hover.border};
        text-decoration-line: ${s.hover.textDecorationLine};
        text-decoration-style: ${s.hover.textDecorationStyle};
      }
      &:not(:disabled):not(.inactive):active {
        background: ${cs.active.background};
        color: ${cs.active.color};
        border-color: ${cs.active.border};
        text-decoration-line: ${s.active.textDecorationLine};
        text-decoration-style: ${s.active.textDecorationStyle};
      }
    `
  },
  propTypes: () => ({
    inactive: PropTypes.bool,
    typographic: PropTypes.bool,
    cursor: PropTypes.oneOf(cursors),
  }),
  defaultProps: (inactive = false, typographic = false, cursor = null) => ({
    inactive,
    typographic,
    cursor,
  }),
}
