/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import NavMenu from '.'

const links = [
  { href: '/one', text: 'One' },
  { href: '/two', text: 'Two' },
  { href: '/three', text: 'Three' },
  {
    href: '/four',
    text: 'More',
    links: [
      { href: '/four/one', text: 'Four One' },
      { href: '/four/two', text: 'Four Two' },
      { href: '/four/three', text: 'Four Three' },
      {
        href: '/four/four',
        text: 'More',
        links: [
          { href: '/four/four/one', text: 'Four Four One' },
          { href: '/four/four/two', text: 'Four Four Two' },
          { href: '/four/four/three', text: 'Four Four Three' },
        ],
      },
    ],
  },
]

const Demo = () => (
  <>
    <h1>NavMenu</h1>
    <p>
      The <em>NavMenu</em> component renders a list of links in an open and
      closable menu.
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
