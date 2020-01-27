import React from 'react'

import { chromatic, chromaticSurface, chromaticText } from '.'
import * as Styled from './demo.styles'

const Color = ({ color }) => (
  <Styled.DemoColumn>
    <h3>{color}</h3>
    <div>
      <Styled.Color color={`${color}.darker`} />
      <Styled.Color color={`${color}.dark`} />
      <Styled.Color color={color} prominent />
      <Styled.Color color={`${color}.light`} />
      <Styled.Color color={`${color}.lighter`} />
    </div>
    <Colorway color={color} />
  </Styled.DemoColumn>
)
Color.propTypes = { ...chromatic.propTypes() }
Color.defaultProps = { ...chromatic.defaultProps() }

const Colorway = ({ color }) => (
  <Styled.ColorwayWrapper>
    <Styled.Colorway color={color} first last left />
    <Styled.Colorway color={color} className="inactive" first last right />
  </Styled.ColorwayWrapper>
)
Colorway.propTypes = { ...chromatic.propTypes() }
Colorway.defaultProps = { ...chromatic.defaultProps() }

const Background = ({ tone, children }) => (
  <Styled.Background tone={tone}>
    <h1>{`${tone} Background`}</h1>
    <TextColors />
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
          <Styled.Color color={`${color}.darker`} />
          <Styled.Color color={`${color}.dark`} />
        </>
      )}
      <Styled.Color color={color} prominent />
      {!light && (
        <>
          <Styled.Color color={`${color}.light`} />
          <Styled.Color color={`${color}.lighter`} />
        </>
      )}
    </>
  )
}
NeutralColor.propTypes = { ...chromatic.propTypes() }
NeutralColor.defaultProps = { ...chromatic.defaultProps() }

const NeutralColorway = ({ color }) => (
  <div>
    <h3>{color}</h3>
    <Colorway color={color} />
  </div>
)
NeutralColorway.propTypes = { ...chromatic.propTypes() }
NeutralColorway.defaultProps = { ...chromatic.defaultProps() }

const TextColor = ({ color }) => (
  <Styled.TextColor color={color}>{color}</Styled.TextColor>
)
TextColor.propTypes = { ...chromaticText.propTypes() }
TextColor.defaultProps = { ...chromaticText.defaultProps() }

const TextColors = () => (
  <Styled.DemoGrid>
    <TextColor color="primary" />
    <TextColor color="secondary" />
    <TextColor color="tertiary" />
    <TextColor color="success" />
    <TextColor color="info" />
    <TextColor color="warning" />
    <TextColor color="danger" />
  </Styled.DemoGrid>
)

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
    <Styled.DemoGrid>
      <Color color="primary" />
      <Color color="secondary" />
      <Color color="tertiary" />
      <Color color="prominent" />
    </Styled.DemoGrid>
    <Styled.DemoColumn>
      <h3>dark, neutral, light</h3>
      <div>
        <NeutralColor color="dark" />
        <NeutralColor color="neutral" />
        <NeutralColor color="light" />
      </div>
      <Styled.DemoGrid>
        <NeutralColorway color="dark" />
        <NeutralColorway color="neutral" />
        <NeutralColorway color="light" />
      </Styled.DemoGrid>
    </Styled.DemoColumn>
    <Styled.DemoGrid>
      <Color color="success" />
      <Color color="info" />
      <Color color="warning" />
      <Color color="danger" />
    </Styled.DemoGrid>

    <h2>ChromaticSurface and ChromaticText</h2>
    <p>
      The <em>chromaticText</em> trait sets the font color to a specific color.
    </p>
    <p>
      The <em>chromaticSurface</em> trait sets the background, font, and border
      color based on the themes color mode; either <quote>dark</quote> or{' '}
      <quote>light</quote>.
    </p>
    <Styled.DemoColumn>
      <Background>
        <Background tone="secondary" />
      </Background>
      <Styled.DemoGrid>
        <Colorway color="background" />
      </Styled.DemoGrid>
    </Styled.DemoColumn>
  </>
)

Demo.story = {
  name: 'Chromatic',
}

export default Demo
