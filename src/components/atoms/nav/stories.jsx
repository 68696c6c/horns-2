/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import * as Story from '_story'

import Nav from '.'

const Demo = () => (
  <>
    <h1>Nav</h1>
    <p>
      The <em>Nav</em> component applies theming to the HTML <code>nav</code>{' '}
      element. It provides no additional behavior. See the{' '}
      <Story.A path="molecules/site-nav">SiteNav</Story.A> component for that.
    </p>
    <Nav color="primary">
      <a href="#">One</a>
      <a href="#">Two</a>
    </Nav>
  </>
)

Demo.story = {
  name: 'Nav',
}

export default Demo
