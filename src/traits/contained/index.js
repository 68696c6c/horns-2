import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const contained = {
  styles: [
    ({ theme, fluid }) => {
      if (fluid) {
        return null
      }
      const container = theme.grid.getBreakpoint('max')
      const gutter = `calc(((100vw - ${container}) / 2))`
      return css`
        @media (min-width: ${container}) {
          padding-left: ${gutter};
          padding-right: ${gutter};
        }
      `
    },
  ],
  propTypes: () => ({
    fluid: PropTypes.bool,
  }),
  defaultProps: () => ({
    fluid: false,
  }),
}

export const containedSplit = {
  styles: [
    ({ theme, fluid }) => {
      if (fluid) {
        return null
      }
      const container = theme.grid.getBreakpoint('max')
      const gutter = `calc(((100vw - ${container}) / 2))`
      return css`
        @media (min-width: ${container}) {
          > :nth-child(odd) {
            padding-left: ${gutter};
          }
          > :nth-child(even) {
            padding-right: ${gutter};
          }
        }
      `
    },
  ],
  propTypes: () => ({
    fluid: PropTypes.bool,
  }),
  defaultProps: () => ({
    fluid: false,
  }),
}
