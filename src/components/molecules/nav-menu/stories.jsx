/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Menu from '.'

const options = [
  { key: 'One', value: '/one' },
  { key: 'Two', value: '/two' },
  { key: 'Three', value: '/three' },
  { key: 'Four', value: '/four' },
]

const Demo = () => (
  <>
    <h1>Menu</h1>
    <p>
      The <em>Menu</em> component is.
    </p>
    <Story.Grid>
      <Menu options={options}>Nav item text</Menu>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'NavMenu',
}

export default Demo
