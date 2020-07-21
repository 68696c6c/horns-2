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
  </>
)

Demo.story = {
  name: 'SiteNav',
}

export default Demo
