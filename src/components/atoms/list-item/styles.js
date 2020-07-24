import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, margined, typographic } from '../../../traits'
import { getItemColors, listDefaults } from '../../../macros'

export const ListItem = styled.li(
  chromatic.styles,
  typographic.styles,
  margined.styles,
  ({ theme, color, markerColor, hasIcon }) => {
    const c = getItemColors(theme, color, markerColor, true)
    let iconCSS
    if (hasIcon) {
      const spacing = theme.sizing.getPX(listDefaults.spacingLeft)
      iconCSS = css`
        display: grid;
        grid-template-columns: 2em auto;
        align-items: center;
        margin-left: ${spacing && `-${spacing}`};
      `
    }
    // Note that in browsers that do not support the ::marker selector (e.g. Chrome), combining it
    // with any other supported selectors will cause the entire rule to fail, hence the separate
    // blocks for ::marker and .list-item-marker.
    return css`
      ${iconCSS};
      &::marker {
        color: ${c.markerColor};
      }
      .list-item-marker {
        color: ${c.markerColor};
      }
    `
  }
)

ListItem.propTypes = {
  ...chromatic.propTypes(),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
}

export const ListItemMarker = styled.i(({ theme, font }) => {
  // In order to position the marker correctly for items that have multiple lines of text, we need
  // to make the height of the marker match the line-height of the text.
  const style = theme.typography.getStyle(font)
  return css`
    display: flex;
    justify-content: center;
    align-self: baseline;
    align-items: center;
    width: 2em;
    height: ${style.lineHeight};
    font-style: unset;
  `
})
