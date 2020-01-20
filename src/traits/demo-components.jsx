/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import { colors } from '../config'
import { getSwatchPath } from '../config/color'
import { chromatic } from './color'

const StyledShade = styled.div(
  ...chromatic.styles,
  ({ prominent, first, last, left, right }) =>
    css`
      padding: ${prominent ? '2em' : '1em'};
      border-style: solid;
      border-left-width: ${left ? '1em' : '0'};
      border-right-width: ${right ? '1em' : '0'};
      border-top-width: ${first ? '1em' : '0'};
      border-bottom-width: ${last ? '1em' : '0'};
    `,
  ({ theme, color }) => {
    const path = getSwatchPath(color)
    const c = theme.color.getTone(color)
    const { base, inactive, hover, active } = c
    return css`
        &::after {
          content: "${path.color}.${path.tone} L: ${base.data.luminosity}";
        }
        &:hover::after {
          content: "${path.color}.${path.tone}.hover L: ${hover.data.luminosity}";
        }
        &:active::after {
          content: "${path.color}.${path.tone}.active L: ${active.data.luminosity}";
        }
        &:disabled::after,
        &.disabled::after {
          content: "inactive L: ${inactive.data.luminosity}";
        }
      `
  }
)

const Shade = ({ first, last, ...others }) => (
  <>
    <StyledShade
      {...others}
      first={first}
      last={last}
      left
    />
    <StyledShade
      {...others}
      className="inactive"
      first={first}
      last={last}
      right
    />
  </>
)

const StyledShades = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0;
`

const StyledColor = styled.div`
  text-align: center;
  margin: 1em;
`

const Color = ({ color }) => (
  <StyledColor>
    <h1>{color}</h1>
    <StyledShades>
      <Shade color={`${color}.darker`} first />
      <Shade color={`${color}.dark`} />
      <Shade color={color} prominent />
      <Shade color={`${color}.light`} />
      <Shade color={`${color}.lighter`} last />
    </StyledShades>
  </StyledColor>
)

Color.propTypes = {
  color: PropTypes.oneOf(colors).isRequired,
}

const StyledColors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const NeutralColors = () => (
  <StyledColor>
    <h1>dark, neutral, light</h1>
    <StyledShades>
      <Shade color="dark" prominent />
      <Shade color="dark.light" />
      <Shade color="dark.lighter" />

      <Shade color="neutral.darker" />
      <Shade color="neutral.dark" />
      <Shade color="neutral" prominent />
      <Shade color="neutral.light" />
      <Shade color="neutral.lighter" />

      <Shade color="light.darker" />
      <Shade color="light.dark" />
      <Shade color="light" prominent />
    </StyledShades>
  </StyledColor>
)

// eslint-disable-next-line import/prefer-default-export
export const Colors = () => (
  <>
    <StyledColors>
      <Color color="primary" />
      <Color color="secondary" />
      <Color color="tertiary" />
    </StyledColors>
    <NeutralColors />
    <StyledColors>
      <Color color="success" />
      <Color color="info" />
      <Color color="warning" />
      <Color color="danger" />
    </StyledColors>
  </>
)
