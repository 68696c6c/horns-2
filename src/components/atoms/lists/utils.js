/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colors } from '../../../config'
import { chromatic, margined, typographic } from '../../../traits'

// This hardcoded spacing is used because if the spacing on the list changes, the list item has no
// way to know how much negative offset to apply to the list item icon.
export const listDefaults = {
  spacingLeft: 'xLarge',
}

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
    margined.styles,
    typographic.styles,
    ({ theme, color, markerColor }) => {
      const c = getItemColors(theme, color, markerColor, false)
      const spacing = theme.sizing.getPX(listDefaults.spacingLeft)
      // Note that in browsers that do not support the ::marker selector (e.g. Chrome), combining it
      // with any other supported selectors will cause the entire rule to fail, hence the separate
      // blocks for ::marker and .list-item-marker.
      return css`
        padding-left: ${spacing};
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
    ...margined.propTypes(),
    ...typographic.propTypes(),
    markerColor: PropTypes.oneOf([null, ...colors]),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(null, true),
    ...margined.defaultProps({ margin: 'min' }),
    ...typographic.defaultProps(),
    markerColor: null,
  }),
}
