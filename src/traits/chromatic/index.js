import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colors, backgroundTones } from '../../config'

export const chromatic = {
  styles: [
    ({ theme, color, typographic }) => {
      const c = theme.color.getColorway(color)
      if (typographic) {
        return css`
          color: ${c.base.base};
        `
      }
      return css`
        background: ${c.base.base};
        color: ${c.base.readable};
        border-color: ${c.base.border};
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf([null, ...colors]),
    typographic: PropTypes.bool,
  }),
  defaultProps: (color = null) => ({ color, typographic: false }),
}

export const chromaticText = {
  styles: [
    ({ theme, color }) => {
      const c = theme.color.getColorway(color)
      return css`
        color: ${c.base.base};
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf([null, ...colors]),
  }),
  defaultProps: (color = null) => ({ color }),
}

export const chromaticSurface = {
  styles: [
    ({ theme, tone }) => {
      const c = theme.color.getBackground(tone)
      return css`
        background: ${c.base.base};
        color: ${c.base.readable};
        border-color: ${c.base.border};
      `
    },
  ],
  propTypes: () => ({
    tone: PropTypes.oneOf(backgroundTones),
  }),
  defaultProps: (tone = 'base') => ({ tone }),
}
