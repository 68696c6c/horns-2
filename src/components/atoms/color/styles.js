import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colorSwatches } from '../../../config'

const Colorway = ({ theme, colorway }) => {
  const cw = theme.color.getColorway(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    border-color: ${cw.border};
  `
}

// eslint-disable-next-line import/prefer-default-export
export const Color = styled.div(Colorway)

Color.propTypes = {
  colorway: PropTypes.oneOf(colorSwatches),
}
