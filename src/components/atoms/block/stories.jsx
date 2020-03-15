/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Block, { Div, Section, Header, Footer } from '.'

const Demo = () => (
  <>
    <h1>Block</h1>
    <p>
      The Block component can be used to render semantic layout elements,
      specifically, divs, sections, headers, and footers. By default, Blocks
      contain their children to the content width dictated by the theme.
    </p>
    <Block>default structure</Block>

    <h2>Aliases</h2>
    <p>The Block component has several alias components.</p>
    <Div color="primary">div structure</Div>
    <Section color="secondary">section structure</Section>
    <Header color="tertiary">header structure</Header>
    <Footer color="prominent">footer structure</Footer>

    <h2>Fluid Prop</h2>
    <Block fluid>fluid structure</Block>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Block color={color}>{color} structure</Block>
    ))}

    <h2>Margin Props</h2>
    <p>
      Blocks accept <em>margin</em> props, but left and right margin can only be
      set if the Block is also <em>fluid</em>.
    </p>
    <Block color="primary" margin="medium">
      margined contained structure
    </Block>
    <Block color="secondary" margin="medium" fluid>
      margined fluid structure
    </Block>

    <h2>Padding Props</h2>
    <p>
      Blocks accept <em>padding</em> props, but left and right padding can only
      be set if the Block is also <em>fluid</em>.
    </p>
    <Block color="primary" padding="medium">
      padded contained structure
    </Block>
    <Block color="secondary" padding="medium" fluid>
      padded fluid structure
    </Block>
  </>
)

Demo.story = {
  name: 'Block',
}

export default Demo
