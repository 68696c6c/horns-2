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
      The <em>chromaticSurface</em> trait sets the background, font, and border
      color based on the themes color mode; either &quote;dark&quote; or
      &quote;light&quote;.
    </p>
    <BackgroundColors />
  </>
)

Demo.story = {
  name: 'Chromatic',
}

export default Demo

const colorDemoCSS = ({ prominent, first, last, left, right }) =>
  css`
    padding: ${prominent ? '2em' : '1em'};
    border-style: solid;
    border-left-width: ${left ? '1em' : '0'};
    border-right-width: ${right ? '1em' : '0'};
    border-top-width: ${first ? '1em' : '0'};
    border-bottom-width: ${last ? '1em' : '0'};
  `

const StyledColor = styled.div(colorDemoCSS, ({ theme, color }) => {
  const c = theme.color.getTone(color)
  const { base, readable, data } = c
  return css`
    background: ${base};
    color: ${readable};
    &::after {
      content: "${color} L: ${data.luminosity}";
    }
  `
})

StyledColor.defaultProps = {
  interactive: false,
}

const StyledColorway = styled.div(
  ...chromatic.styles,
  colorDemoCSS,
  ({ theme, color }) => {
    const c = theme.color.getColorway(color)
    const { base, inactive, hover, active } = c
    return css`
      &::after {
        content: "base L: ${base.data.luminosity}";
      }
      &:hover::after {
        content: "hover L: ${hover.data.luminosity}";
      }
      &:active::after {
        content: "active L: ${active.data.luminosity}";
      }
      &:disabled::after,
      &.disabled::after,
      &.inactive::after {
        content: "inactive L: ${inactive.data.luminosity}";
      }
    `
  }
)

StyledColorway.defaultProps = {
  interactive: true,
}

const Colorway = ({ first, last, ...others }) => (
  <StyledShades>
    <StyledColorway {...others} first last left />
    <StyledColorway {...others} className="inactive" first last right />
  </StyledShades>
)

const StyledShades = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0;
`

const StyledColorWrapper = styled.div`
  text-align: center;
`

const StyledColors = styled.div`
  margin-bottom: 1em;
`

const Color = ({ color }) => (
  <StyledColorWrapper>
    <h3>{color}</h3>
    <StyledColors>
      <StyledColor color={`${color}.darker`} />
      <StyledColor color={`${color}.dark`} />
      <StyledColor color={color} prominent />
      <StyledColor color={`${color}.light`} />
      <StyledColor color={`${color}.lighter`} />
    </StyledColors>
    <Colorway color={color} />
  </StyledColorWrapper>
)

Color.propTypes = {
  color: PropTypes.oneOf(colors).isRequired,
}

const StyledColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1em;
`

const StyledNeutralColor = ({ color }) => {
  const dark = color === 'dark'
  const light = color === 'light'
  return (
    <>
      {!dark && (
        <>
          <StyledColor color={`${color}.darker`} />
          <StyledColor color={`${color}.dark`} />
        </>
      )}
      <StyledColor color={color} prominent />
      {!light && (
        <>
          <StyledColor color={`${color}.light`} />
          <StyledColor color={`${color}.lighter`} />
        </>
      )}
    </>
  )
}

const StyledNeutralColors = () => (
  <StyledColorWrapper>
    <h3>dark, neutral, light</h3>
    <StyledNeutralColor color="dark" />
    <StyledNeutralColor color="neutral" />
    <StyledNeutralColor color="light" />
    <StyledColorsWrapper>
      <Colorway color="dark" />
      <Colorway color="neutral" />
      <Colorway color="light" />
    </StyledColorsWrapper>
  </StyledColorWrapper>
)

const Colors = () => (
  <>
    <StyledColorsWrapper>
      <Color color="primary" />
      <Color color="secondary" />
      <Color color="tertiary" />
      <Color color="prominent" />
    </StyledColorsWrapper>
    <StyledNeutralColors />
    <StyledColorsWrapper>
      <Color color="success" />
      <Color color="info" />
      <Color color="warning" />
      <Color color="danger" />
    </StyledColorsWrapper>
  </>
)

const StyledTextColor = styled.span(...chromaticText.styles)

StyledTextColor.propTypes = {
  ...chromaticText.propTypes(),
}

StyledTextColor.defaultProps = {
  ...chromaticText.defaultProps('', true),
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
