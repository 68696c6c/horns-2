/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Block from '.'

const Demo = () => (
  <>
    <h1>Block</h1>
    <p>
      The <em>Block</em> component is a generic layout component. By default,{' '}
      <em>Block</em> components contain their children to the content width
      dictated by the theme.
    </p>
    <Block color="primary">default block</Block>

    <h2>Fluid Prop</h2>
    <Block color="secondary" fluid>
      This block is fluid and does not confine its children to a center content
      area.
    </Block>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Block color={color}>{color} block</Block>
    ))}

    <h2>Padding Props</h2>
    <p>
      <em>Block</em>s accept <em>padding</em> props, but left and right padding
      can only be set if the Block is also <em>fluid</em>.
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
