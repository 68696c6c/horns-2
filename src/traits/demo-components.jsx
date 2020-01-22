/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import { colors } from '../config'
import { getSwatchPath } from '../config/color'
import { chromatic, chromaticText, chromaticSurface } from './chromatic'

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
    <StyledShade {...others} first={first} last={last} left />
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

const StyledTextColor = styled.div(...chromaticText.styles)

StyledTextColor.propTypes = {
  ...chromaticText.propTypes(),
}

StyledTextColor.defaultProps = {
  ...chromaticText.defaultProps(),
}

// eslint-disable-next-line react/prop-types
const TextColor = ({ color }) => (
  <StyledTextColor color={color}>{color}</StyledTextColor>
)

const StyledTextColors = styled.div`
  padding: 1em;
`

const TextColors = () => (
  <StyledTextColors>
    <TextColor color="primary" />
    <TextColor color="secondary" />
    <TextColor color="tertiary" />
    <TextColor color="success" />
    <TextColor color="info" />
    <TextColor color="warning" />
    <TextColor color="danger" />
  </StyledTextColors>
)

const StyledBackground = styled.div(
  ...chromaticSurface.styles,
  () => css`
    padding: 1em;
    border-width: 1em;
    border-style: solid;
  `
)

const StyledBackgrounds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  text-transform: capitalize;
`

const Background = ({ tone, interactive, children }) => (
  <StyledBackground tone={tone} interactive={interactive}>
    <h1>{`${interactive ? 'Interactive ' : ''}${tone} Background`}</h1>
    <TextColors />
    {children}
  </StyledBackground>
)

Background.defaultProps = {
  ...chromaticSurface.propTypes(),
}

Background.defaultProps = {
  ...chromaticSurface.defaultProps(),
}

export const BackgroundColors = () => (
  <StyledBackgrounds>
    <Background>
      <Background tone="secondary">
        <Background tone="tertiary" />
      </Background>
    </Background>
    <Background interactive>
      <Background tone="secondary" interactive>
        <Background tone="tertiary" interactive />
      </Background>
    </Background>
  </StyledBackgrounds>
)
