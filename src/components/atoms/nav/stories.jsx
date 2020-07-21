/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Nav from '.'
import NavItem from '../nav-item'

const Demo = () => (
  <>
    <h1>Nav</h1>
    <p>
      The <em>Nav</em> component applies theming to the HTML <code>nav</code>{' '}
      element. It provides no additional behavior. See the{' '}
      <Story.A path="molecules/site-nav">SiteNav</Story.A> component for that.
    </p>
    <Nav color="primary">
      <NavItem href="#">One</NavItem>
      <NavItem href="/example/hello">Two</NavItem>
    </Nav>
  </>
)

Demo.story = {
  name: 'Nav',
}

export default Demo
