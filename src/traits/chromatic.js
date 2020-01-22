import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colorShades } from '../config'

export const chromatic = {
  styles: [
    ({ theme, color }) => {
      const c = theme.color.getTone(color)
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
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf(colorShades),
  }),
  defaultProps: color => ({
    color,
  }),
}

export const chromaticText = {
  styles: [
    ({ theme, color }) => {
      const c = theme.color.getTone(color)
      const { base, inactive, hover, active } = c
      return css`
        color: ${base.base};
        &:disabled,
        &.inactive {
          color: ${inactive.base};
        }
        &:not(:disabled):not(.inactive):hover {
          color: ${hover.base};
        }
        &:not(:disabled):not(.inactive):active {
          color: ${active.base};
        }
      `
    },
  ],
  propTypes: () => ({
    color: PropTypes.oneOf(colorShades),
  }),
  defaultProps: color => ({
    color,
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
    tone: PropTypes.oneOf(['base', 'secondary', 'tertiary']),
    interactive: PropTypes.bool,
  }),
  defaultProps: (tone = 'base', interactive = false) => ({
    tone,
    interactive,
  }),
}
