/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import NavMenu from '.'

const links = [
  { href: '/one', text: 'One' },
  { href: '/two', text: 'Two' },
  { href: '/three', text: 'Three' },
  { href: '/four', text: 'Four' },
]

const Demo = () => (
  <>
    <h1>Menu</h1>
    <p>
      The <em>Menu</em> component is.
    </p>
    <Story.Grid>
      <NavMenu links={links}>Nav item text</NavMenu>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'NavMenu',
}

export default Demo
