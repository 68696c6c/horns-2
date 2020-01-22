/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, chromaticSurface, chromaticText } from '.'
import { colors } from '../../config'
import { getSwatchPath } from '../../config/color'

const Demo = () => (
  <>
    <h1>Chromatic Traits</h1>
    <p>
      The chromatic traits provide color to a component. The chromatic trait has
      three variations: <em>chromatic</em>, <em>chromaticText</em>, and{' '}
      <em>chromaticSurface</em>.
    </p>

    <h2>Chromatic</h2>
    <p>
      The <em>chromatic</em> trait provides background and border colors and
      sets the font color to a readable color.
    </p>
    <Colors />

    <h2>ChromaticSurface and ChromaticText</h2>
    <p>
      The <em>chromaticText</em> trait sets the font color to a specific color.
    </p>
    <p>
      The <em>chromaticSurface</em> trait sets the background, font, and border color
      based on the themes color mode; either &quote;dark&quote; or
      &quote;light&quote;.
    </p>
    <BackgroundColors />
  </>
)

Demo.story = {
  name: 'Chromatic',
}

export default Demo

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

StyledShade.defaultProps = {
  interactive: true,
}

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
  margin: 0 1em;
`

const Color = ({ color }) => (
  <StyledColor>
    <h3>{color}</h3>
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
    <h3>dark, neutral, light</h3>
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

const Colors = () => (
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

const BackgroundColors = () => (
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
