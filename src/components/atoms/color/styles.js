import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { colorSwatches } from '../../../config'

// eslint-disable-next-line import/prefer-default-export
export const Colorway = ({ theme, colorway }) => {
  console.log('theme', theme)
  const cw = theme.color.getColorway(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    border-color: ${cw.border};
  `
}

Colorway.propTypes = {
  colorway: PropTypes.oneOf(colorSwatches),
}
