/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

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

describe('SiteNav', () => {
  it('should render as default', () => {
    const { container } = render(<SiteNav links={links} />)
    expect(container).toMatchSnapshot()
  })
  it('should highlight the current item', () => {
    const { container } = render(<SiteNav currentPath="/one" links={links} />)
    expect(container).toMatchSnapshot()
  })
})
