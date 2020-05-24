/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Section from '.'

const Demo = () => (
  <>
    <h1>Section</h1>
    <p>
      The <em>Section</em> component applies theming to the HTML{' '}
      <code>section</code> tag. By default, <em>Section</em> components contain
      their children to the content width dictated by the theme.
    </p>
    <Section color="primary">default section</Section>

    <h2>Fluid Prop</h2>
    <Section color="secondary" fluid>
      This section is fluid and does not confine its children to a center
      content area.
    </Section>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Section color={color}>{color} section</Section>
    ))}

    <h2>Padding Props</h2>
    <p>
      <em>Section</em>s accept <em>padding</em> props, but left and right
      padding can only be set if the Block is also <em>fluid</em>.
    </p>
    <Section color="primary" padding="medium">
      padded contained section
    </Section>
    <Section color="secondary" padding="medium" fluid>
      padded fluid section
    </Section>
  </>
)

Demo.story = {
  name: 'Section',
}

export default Demo
