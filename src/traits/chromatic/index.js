import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colors, backgroundTones } from '../../config'

export const chromatic = {
  styles: [
    ({ theme, color, interactive }) => {
      const c = theme.color.getColorway(color)
      const { base, inactive, hover, active } = c
      return css`
        background: ${base.base};
        color: ${base.readable};
        border-color: ${base.border};
        &:disabled,
        &.inactive {
          background: ${inactive.base};
          color: ${inactive.readable};
          border-color: ${inactive.border};
        }
        ${interactive &&
          css`
            &:not(:disabled):not(.inactive):hover {
              background: ${hover.base};
              color: ${hover.readable};
              border-color: ${hover.border};
            }
            &:not(:disabled):not(.inactive):active {
              background: ${active.base};
              color: ${active.readable};
              border-color: ${active.border};
            }
          `}
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf([null, ...colors]),
    interactive: PropTypes.bool,
  }),
  defaultProps: (color = null, interactive = false) => ({
    color,
    interactive,
  }),
}

export const chromaticText = {
  styles: [
    ({ theme, color, interactive }) => {
      const c = theme.color.getColorway(color)
      const { base, inactive, hover, active } = c
      return css`
        color: ${base.base};
        &:disabled,
        &.inactive {
          color: ${inactive.base};
        }
        ${interactive &&
          css`
            &:not(:disabled):not(.inactive):hover {
              color: ${hover.base};
            }
            &:not(:disabled):not(.inactive):active {
              color: ${active.base};
            }
          `}
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf([null, ...colors]),
    interactive: PropTypes.bool,
  }),
  defaultProps: (color = null, interactive = false) => ({
    color,
    interactive,
  }),
}

export const chromaticSurface = {
  styles: [
    ({ theme, tone, interactive }) => {
      const c = theme.color.getBackground(tone)
      const { base, inactive, hover, active } = c
      return css`
        background: ${base.base};
        color: ${base.readable};
        border-color: ${base.border};
        &:disabled,
        &.inactive {
          background: ${inactive.base};
          color: ${inactive.readable};
          border-color: ${inactive.border};
        }
        ${interactive &&
          css`
            &:not(:disabled):not(.inactive):hover {
              background: ${hover.base};
              color: ${hover.readable};
              border-color: ${hover.border};
            }
            &:not(:disabled):not(.inactive):active {
              background: ${active.base};
              color: ${active.readable};
              border-color: ${active.border};
            }
          `}
      `
    },
  ],
  propTypes: () => ({
    tone: PropTypes.oneOf(backgroundTones),
  }),
  defaultProps: (tone = 'base') => ({
    tone,
  }),
}
