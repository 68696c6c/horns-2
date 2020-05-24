/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Footer from '.'

const Demo = () => (
  <>
    <h1>Footer</h1>
    <p>
      The <em>Footer</em> component applies theming to the HTML{' '}
      <code>footer</code> tag. By default, <em>Footer</em> components contain
      their children to the content width dictated by the theme.
    </p>
    <Footer color="primary">default footer</Footer>

    <h2>Fluid Prop</h2>
    <Footer color="secondary" fluid>
      This footer is fluid and does not confine its children to a center content
      area.
    </Footer>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Footer color={color}>{color} footer</Footer>
    ))}

    <h2>Padding Props</h2>
    <p>
      <em>Footer</em>s accept <em>padding</em> props, but left and right padding
      can only be set if the Block is also <em>fluid</em>.
    </p>
    <Footer color="primary" padding="medium">
      padded contained footer
    </Footer>
    <Footer color="secondary" padding="medium" fluid>
      padded fluid footer
    </Footer>
  </>
)

Demo.story = {
  name: 'Footer',
}

export default Demo
