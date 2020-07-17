/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import { chromatic, chromaticSurface } from '.'
import * as Styled from './stories.styles'

const Tone = ({ color, tone, prominent }) => {
  const theme = useTheme()
  const c = theme.color.getTone(color)
  const t = theme.color.getTone(`${color}.${tone}`)
  const luminosity = t.luminosity().toFixed(2)
  const contrastB = t.contrast(c).toFixed(2)
  const Tag = prominent ? 'h3' : 'h5'
  return (
    <Styled.Color color={color} tone={tone} prominent={prominent}>
      <Tag>
        {color} {tone}
      </Tag>
      <small>luminosity: {luminosity}</small>
      <small>contrast to base: {contrastB}</small>
    </Styled.Color>
  )
}

const Color = ({ color, children, showColorway }) => (
  <Styled.DemoColumn>
    <h3>
      <TextColor color={color} interactive />
    </h3>
    <div>{children}</div>
    {showColorway && <Colorway color={color} interactive />}
  </Styled.DemoColumn>
)
Color.propTypes = { ...chromatic.propTypes(), showColorway: PropTypes.bool }
Color.defaultProps = { ...chromatic.defaultProps() }

const Colorway = ({ color }) => (
  <Styled.ColorwayWrapper>
    <Styled.Colorway color={color} first last left interactive />
    <Styled.Colorway
      color={color}
      className="inactive"
      first
      last
      right
      interactive
    />
  </Styled.ColorwayWrapper>
)
Colorway.propTypes = { ...chromatic.propTypes() }
Colorway.defaultProps = { ...chromatic.defaultProps() }

const Background = ({ tone, children }) => (
  <Styled.Background tone={tone}>
    <h1>{`${tone} background`}</h1>
    {children}
  </Styled.Background>
)
Background.propTypes = { ...chromaticSurface.propTypes() }
Background.defaultProps = { ...chromaticSurface.defaultProps() }

const NeutralColor = ({ color }) => {
  const dark = color === 'dark'
  const light = color === 'light'
  return (
    <>
      {!dark && (
        <>
          <Tone color={color} tone="darker" nextTone="dark" />
          <Tone color={color} tone="dark" nextTone="base" />
        </>
      )}
      <Tone color={color} tone="base" nextTone="light" prominent />
      {!light && (
        <>
          <Tone color={color} tone="light" nextTone="lighter" />
          <Tone color={color} tone="lighter" />
        </>
      )}
    </>
  )
}
NeutralColor.propTypes = { ...chromatic.propTypes() }
NeutralColor.defaultProps = { ...chromatic.defaultProps() }

const NeutralColorway = ({ color }) => (
  <div>
    <h3>
      <TextColor color={color}>{color}</TextColor>
    </h3>
    <Colorway color={color} />
  </div>
)
NeutralColorway.propTypes = { ...chromatic.propTypes() }
NeutralColorway.defaultProps = { ...chromatic.defaultProps() }

const TextColor = ({ color }) => (
  <Styled.TextColor color={color}>{color}</Styled.TextColor>
)
TextColor.propTypes = { ...chromatic.propTypes() }
TextColor.defaultProps = { ...chromatic.defaultProps(null, true) }

const Demo = () => (
  <>
    <h1>Chromatic Traits</h1>
    <p>
      The chromatic traits provide color to a component. The chromatic trait has
      two variations: <em>chromatic</em> and <em>chromaticSurface</em>.
    </p>

    <h2>Chromatic</h2>
    <p>
      The <em>chromatic</em> trait provides background and border colors and
      sets the font color to a readable color.
    </p>
    <Styled.DemoGrid>
      <Color color="primary">
        <Tone color="primary" tone="darker" nextTone="primary.dark" />
        <Tone color="primary" tone="dark" nextTone="primary.base" />
        <Tone color="primary" tone="base" nextTone="primary.light" prominent />
        <Tone color="primary" tone="light" nextTone="primary.lighter" />
        <Tone color="primary" tone="lighter" nextTone="" />
      </Color>
      <Color color="secondary">
        <Tone color="secondary" tone="darker" nextTone="secondary.dark" />
        <Tone color="secondary" tone="dark" nextTone="secondary.base" />
        <Tone
          color="secondary"
          tone="base"
          nextTone="secondary.light"
          prominent
        />
        <Tone color="secondary" tone="light" nextTone="secondary.lighter" />
        <Tone color="secondary" tone="lighter" nextTone="" />
      </Color>
      <Color color="tertiary">
        <Tone color="tertiary" tone="darker" nextTone="tertiary.dark" />
        <Tone color="tertiary" tone="dark" nextTone="tertiary.base" />
        <Tone
          color="tertiary"
          tone="base"
          nextTone="tertiary.light"
          prominent
        />
        <Tone color="tertiary" tone="light" nextTone="tertiary.lighter" />
        <Tone color="tertiary" tone="lighter" nextTone="" />
      </Color>
      <Color color="prominent">
        <Tone color="prominent" tone="darker" nextTone="prominent.dark" />
        <Tone color="prominent" tone="dark" nextTone="prominent.base" />
        <Tone
          color="prominent"
          tone="base"
          nextTone="prominent.light"
          prominent
        />
        <Tone color="prominent" tone="light" nextTone="prominent.lighter" />
        <Tone color="prominent" tone="lighter" nextTone="" />
      </Color>
    </Styled.DemoGrid>
    <Styled.DemoColumn>
      <h3>dark, neutral, light</h3>
      <div>
        <Tone color="dark" tone="base" nextTone="dark.light" prominent />
        <Tone color="dark" tone="light" nextTone="dark.lighter" />
        <Tone color="dark" tone="lighter" nextTone="neutral.darker" />
        <Tone color="neutral" tone="darker" nextTone="neutral.dark" />
        <Tone color="neutral" tone="dark" nextTone="neutral.base" />
        <Tone color="neutral" tone="base" nextTone="neutral.light" prominent />
        <Tone color="neutral" tone="light" nextTone="neutral.lighter" />
        <Tone color="neutral" tone="lighter" nextTone="light.darker" />
        <Tone color="light" tone="darker" nextTone="light.dark" />
        <Tone color="light" tone="dark" nextTone="light.base" />
        <Tone color="light" tone="base" nextTone="" prominent />
      </div>
    </Styled.DemoColumn>
    <Styled.DemoGrid>
      <Color color="success">
        <Tone color="success" tone="darker" nextTone="success.dark" />
        <Tone color="success" tone="dark" nextTone="success.base" />
        <Tone color="success" tone="base" nextTone="success.light" prominent />
        <Tone color="success" tone="light" nextTone="success.lighter" />
        <Tone color="success" tone="lighter" nextTone="" />
      </Color>
      <Color color="info">
        <Tone color="info" tone="darker" nextTone="info.dark" />
        <Tone color="info" tone="dark" nextTone="info.base" />
        <Tone color="info" tone="base" nextTone="info.light" prominent />
        <Tone color="info" tone="light" nextTone="info.lighter" />
        <Tone color="info" tone="lighter" nextTone="" />
      </Color>
      <Color color="warning">
        <Tone color="warning" tone="darker" nextTone="warning.dark" />
        <Tone color="warning" tone="dark" nextTone="warning.base" />
        <Tone color="warning" tone="base" nextTone="warning.light" prominent />
        <Tone color="warning" tone="light" nextTone="warning.lighter" />
        <Tone color="warning" tone="lighter" nextTone="" />
      </Color>
      <Color color="danger">
        <Tone color="danger" tone="darker" nextTone="danger.dark" />
        <Tone color="danger" tone="dark" nextTone="danger.base" />
        <Tone color="danger" tone="base" nextTone="danger.light" prominent />
        <Tone color="danger" tone="light" nextTone="danger.lighter" />
        <Tone color="danger" tone="lighter" nextTone="" />
      </Color>
    </Styled.DemoGrid>

    <h2>ChromaticSurface</h2>
    <p>
      The <em>chromaticSurface</em> trait sets the background, font, and border
      color based on the themes color mode; either <q>dark</q> or <q>light</q>.
    </p>
    <p>
      When combined with the <em>interactive</em> trait, the <em>chromatic</em>{' '}
      and <em>chromaticSurface</em> traits will change colors on hover and
      active states, or if they are marked as disabled or inactive.
    </p>
    <Styled.DemoColumn>
      <Background>
        <Styled.DemoGrid>
          <Color color="primary" showColorway />
          <Color color="secondary" showColorway />
          <Color color="tertiary" showColorway />
          <Color color="prominent" showColorway />
        </Styled.DemoGrid>
        <Styled.DemoGrid>
          <NeutralColorway color="dark" />
          <NeutralColorway color="neutral" />
          <NeutralColorway color="light" />
          <NeutralColorway color="background" />
        </Styled.DemoGrid>
        <Styled.DemoGrid>
          <Color color="success" showColorway />
          <Color color="info" showColorway />
          <Color color="warning" showColorway />
          <Color color="danger" showColorway />
        </Styled.DemoGrid>
        <Background tone="secondary">
          <Styled.DemoGrid>
            <Color color="primary" showColorway />
            <Color color="secondary" showColorway />
            <Color color="tertiary" showColorway />
            <Color color="prominent" showColorway />
          </Styled.DemoGrid>
          <Styled.DemoGrid>
            <NeutralColorway color="dark" />
            <NeutralColorway color="neutral" />
            <NeutralColorway color="light" />
            <NeutralColorway color="background" />
          </Styled.DemoGrid>
          <Styled.DemoGrid>
            <Color color="success" showColorway />
            <Color color="info" showColorway />
            <Color color="warning" showColorway />
            <Color color="danger" showColorway />
          </Styled.DemoGrid>
        </Background>
      </Background>
    </Styled.DemoColumn>
  </>
)

Demo.story = {
  name: 'Chromatic',
}

export default Demo
