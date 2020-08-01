/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import SiteNav from '.'

const links = [
  { href: '/one', text: 'One' },
  { href: '/two', text: 'Two' },
  { href: '/three', text: 'Three' },
  {
    href: '/four',
    text: 'More',
    links: [
      { href: '/four/one', text: 'Sub One' },
      { href: '/four/two', text: 'Sub Two' },
      { href: '/four/three', text: 'Sub Three' },
      {
        href: '/four/four',
        text: 'More',
        links: [
          { href: '/four/four/one', text: 'Sub Sub One' },
          { href: '/four/four/two', text: 'Sub Sub Two' },
          { href: '/four/four/three', text: 'Sub Sub Three' },
        ],
      },
    ],
  },
]

const Demo = () => (
  <>
    <h1>SiteNav</h1>
    <p>
      The <em>SiteNav</em> component provides a fully themed and functional
      site-wide navigation bar.
    </p>
    <SiteNav currentPath="/four/four/three" links={links} />

    <h2>Item Props</h2>
    <p>
      The <em>SiteNav</em> component accepts <em>variant</em>, <em>layout</em>,{' '}
      <em>currentColor</em>, <em>currentWidth</em>, and <em>currentStyle</em>{' '}
      props for styling its items.
    </p>

    <h3>Background Variant</h3>
    <Story.Grid>
      <SiteNav
        variant="background"
        color="secondary"
        currentColor="dark"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>

    <h3>Border Variant</h3>
    <Story.Grid>
      <SiteNav
        variant="border"
        color="tertiary"
        currentColor="neutral"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>

    <h3>Colorway Variant</h3>
    <Story.Grid>
      <SiteNav
        variant="colorway"
        color="danger"
        currentColor="warning"
        currentPath="/two"
        links={links}
      />
    </Story.Grid>

    <h3>Underline Variant</h3>
    <Story.Grid>
      <SiteNav
        variant="underline"
        color="warning"
        currentPath="/three"
        links={links}
      />
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'SiteNav',
}

export default Demo
