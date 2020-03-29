/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Block, { Div, Section, Header, Footer } from '.'

const Demo = () => (
  <>
    <h1>Block</h1>
    <p>
      The <em>Block</em> component can be used to render semantic layout
      elements, specifically, divs, sections, headers, and footers. By default,
      Blocks contain their children to the content width dictated by the theme.
    </p>
    <Block>default block</Block>

    <h2>Aliases</h2>
    <p>
      The <em>Block</em> component has several alias components.
    </p>
    <Div color="primary">div block</Div>
    <Section color="secondary">section block</Section>
    <Header color="tertiary">header block</Header>
    <Footer color="prominent">footer block</Footer>

    <h2>Fluid Prop</h2>
    <Block color="primary" fluid>
      This block is fluid and does not confine its children to a center content
      area.
    </Block>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Block color={color}>{color} block</Block>
    ))}

    <h2>Margin Props</h2>
    <p>
      <em>Blocks</em> accept <em>margin</em> props, but left and right margin
      can only be set if the Block is also <em>fluid</em>.
    </p>
    <Block color="primary" margin="medium">
      margined contained block
    </Block>
    <Block color="secondary" margin="medium" fluid>
      margined fluid block
    </Block>

    <h2>Padding Props</h2>
    <p>
      Blocks accept <em>padding</em> props, but left and right padding can only
      be set if the Block is also <em>fluid</em>.
    </p>
    <Block color="primary" padding="medium">
      padded contained block
    </Block>
    <Block color="secondary" padding="medium" fluid>
      padded fluid block
    </Block>
  </>
)

Demo.story = {
  name: 'Block',
}

export default Demo
