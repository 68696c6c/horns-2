/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Header from '.'

const Demo = () => (
  <>
    <h1>Header</h1>
    <p>
      The <em>Header</em> component applies theming to the HTML{' '}
      <code>header</code> tag. By default, <em>Header</em> components contain
      their children to the content width dictated by the theme.
    </p>
    <Header color="primary">default header</Header>

    <h2>Fluid Prop</h2>
    <Header color="secondary" fluid>
      This header is fluid and does not confine its children to a center content
      area.
    </Header>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Header color={color}>{color} header</Header>
    ))}

    <h2>Padding Props</h2>
    <p>
      <em>Header</em>s accept <em>padding</em> props, but left and right padding
      can only be set if the Block is also <em>fluid</em>.
    </p>
    <Header color="primary" padding="medium">
      padded contained header
    </Header>
    <Header color="secondary" padding="medium" fluid>
      padded fluid header
    </Header>
  </>
)

Demo.story = {
  name: 'Header',
}

export default Demo
