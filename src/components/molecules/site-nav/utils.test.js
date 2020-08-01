/* global describe, it, expect */

import { cloneWithIDs, makeLinkMap } from './utils'

describe('SiteNav utils', () => {
  const input = [
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

  const expectedCopy = [
    { id: 'id-/one', href: '/one', text: 'One' },
    { id: 'id-/two', href: '/two', text: 'Two' },
    { id: 'id-/three', href: '/three', text: 'Three' },
    {
      id: 'id-/four',
      href: '/four',
      text: 'More',
      links: [
        { id: 'id-/four/one', href: '/four/one', text: 'Four One' },
        { id: 'id-/four/two', href: '/four/two', text: 'Four Two' },
        { id: 'id-/four/three', href: '/four/three', text: 'Four Three' },
        {
          id: 'id-/four/four',
          href: '/four/four',
          text: 'More',
          links: [
            { id: 'id-/four/four/one', href: '/four/four/one', text: 'Four Four One' },
            { id: 'id-/four/four/two', href: '/four/four/two', text: 'Four Four Two' },
            { id: 'id-/four/four/three', href: '/four/four/three', text: 'Four Four Three' },
          ],
        },
      ],
    },
  ]

  const output = {
    'id-/one': ['id-/one'],
    'id-/two': ['id-/two'],
    'id-/three': ['id-/three'],
    'id-/four': ['id-/four'],
    'id-/four/one': ['id-/four', 'id-/four/one'],
    'id-/four/two': ['id-/four', 'id-/four/two'],
    'id-/four/three': ['id-/four', 'id-/four/three'],
    'id-/four/four': ['id-/four', 'id-/four/four'],
    'id-/four/four/one': ['id-/four', 'id-/four/four', 'id-/four/four/one'],
    'id-/four/four/two': ['id-/four', 'id-/four/four', 'id-/four/four/two'],
    'id-/four/four/three': ['id-/four', 'id-/four/four', 'id-/four/four/three'],
  }

  const makeID = (obj) => `id-${obj.href}`

  it('should cloneWithIDs', () => {
    const [result] = cloneWithIDs(input, '/four', makeID)
    expect(result).toEqual(expectedCopy)
  })

  it('should makeLinkMap', () => {
    const [clonedInput] = cloneWithIDs(input, '/four/four', makeID)
    const result = makeLinkMap(clonedInput)
    expect(result).toEqual(output)
  })
})
