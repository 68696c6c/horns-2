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
    <h1>SiteNav</h1>
    <p>
      The <em>SiteNav</em> component provides a fully themed and functional
      site-wide navigation bar.
    </p>
    <SiteNav color="primary" currentPath="/example/hello" links={links} />
    <h2>Item Props</h2>
    <p>
      The <em>SiteNav</em> component accepts <em>variant</em>, <em>layout</em>,{' '}
      <em>currentColor</em>, <em>currentWidth</em>, and <em>currentStyle</em>{' '}
      props for styling its items.
    </p>
    <Story.Grid>
      <SiteNav
        variant="background"
        color="primary"
        currentColor="dark"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>
    <Story.Grid>
      <SiteNav
        variant="border"
        color="secondary"
        currentColor="neutral"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>
    <Story.Grid>
      <SiteNav
        variant="colorway"
        color="tertiary"
        currentColor="light"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>
    <Story.Grid>
      <SiteNav
        variant="underline"
        color="success"
        currentPath="/one"
        links={links}
      />
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'SiteNav',
}

export default Demo
