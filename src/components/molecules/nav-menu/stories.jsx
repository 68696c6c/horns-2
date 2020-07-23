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
    <h2>Item Props</h2>
    <p>
      The <em>NavMenu</em> component accepts <em>variant</em>, <em>layout</em>,{' '}
      <em>currentColor</em>, <em>currentWidth</em>, and <em>currentStyle</em>{' '}
      props for styling its items.
    </p>
    <Story.Grid>
      <NavMenu links={links} variant="background" currentPath="/four/four/one">
        NavItemBackground text
      </NavMenu>
    </Story.Grid>
    <Story.Grid>
      <NavMenu links={links} variant="border" currentPath="/four/four/one">
        NavItemBorder text
      </NavMenu>
    </Story.Grid>
    <Story.Grid>
      <NavMenu links={links} variant="colorway" currentPath="/four/four/one">
        NavItemColorway text
      </NavMenu>
    </Story.Grid>
    <Story.Grid>
      <NavMenu links={links} variant="underline" currentPath="/four/four/one">
        NavItemUnderline text
      </NavMenu>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'NavMenu',
}

export default Demo
