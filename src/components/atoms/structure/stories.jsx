/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Structure, { Div, Section, Header, Footer } from '.'

const Demo = () => (
  <>
    <h1>Structure</h1>
    <p>
      The Structure component can be used to render semantic layout elements,
      specifically, divs, sections, headers, and footers. By default, Structures
      contain their children to the content width dictated by the theme.
    </p>
    <Structure>default structure</Structure>

    <h2>Aliases</h2>
    <p>The Structure component has several alias components.</p>
    <Div color="primary">div structure</Div>
    <Section color="secondary">section structure</Section>
    <Header color="tertiary">header structure</Header>
    <Footer color="prominent">footer structure</Footer>

    <h2>Fluid Prop</h2>
    <Structure fluid>fluid structure</Structure>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Structure color={color}>{color} structure</Structure>
    ))}

    <h2>Margin Props</h2>
    <p>
      Structures accept <em>margin</em> props, but left and right margin can
      only be set if the Structure is also <em>fluid</em>.
    </p>
    <Structure color="primary" margin="medium">margined contained structure</Structure>
    <Structure color="secondary" margin="medium" fluid>margined fluid structure</Structure>

    <h2>Padding Props</h2>
    <p>
      Structures accept <em>padding</em> props, but left and right padding can
      only be set if the Structure is also <em>fluid</em>.
    </p>
    <Structure color="primary" padding="medium">padded contained structure</Structure>
    <Structure color="secondary" padding="medium" fluid>padded fluid structure</Structure>

  </>
)

Demo.story = {
  name: 'Structure',
}

export default Demo
