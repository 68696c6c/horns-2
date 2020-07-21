/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Menu from '.'

const Demo = () => (
  <>
    <h1>Menu</h1>
    <p>
      The <em>Menu</em> component is a simple collection of items that can be opened and closed.
    </p>
    <Menu color="primary" open>
      <li>One</li>
      <li>Two</li>
    </Menu>
  </>
)

Demo.story = {
  name: 'Menu',
}

export default Demo
