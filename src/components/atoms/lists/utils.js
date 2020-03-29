import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colors } from '../../../config'
import { chromatic, typographic } from '../../../traits'

export const listTypes = {
  ordered: ['A', 'a', 'I', 'i', 'l'],
  unordered: ['disc', 'circle', 'none', 'square'],
}

export const getItemColors = (theme, color, markerColor, isItem) => {
  const c = theme.color.getColorway(color)
  const cc = color === 'background' ? c.base.readable : c.base.base

  const mc = theme.color.getColorway(markerColor || color)
  let mcc = markerColor === 'background' ? mc.base.readable : mc.base.base

  if (mcc && isItem) {
    mcc = `${mcc} !important`
  }

  return {
    color: cc,
    markerColor: mcc,
  }
}

export const baseList = {
  styles: () => [
    chromatic.styles,
    typographic.styles,
    ({ theme, color, markerColor }) => {
      const c = getItemColors(theme, color, markerColor, false)
      // Note that in browsers that do not support the ::marker selector (e.g. Chrome), combining it
      // with any other supported selectors will cause the entire rule to fail, hence the separate
      // blocks for ::marker and .list-item-marker.
      return css`
        padding-left: 2em;
        .list-item::marker {
          color: ${c.markerColor};
        }
        .list-item-marker {
          color: ${c.markerColor};
        }
      `
    },
  ],
  propTypes: () => ({
    ...chromatic.propTypes(null, true),
    ...typographic.propTypes(),
    markerColor: PropTypes.oneOf([null, ...colors]),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(null, true),
    ...typographic.defaultProps(),
    markerColor: null,
  }),
}
