/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import Link from '.'

const Demo = () => (
  <>
    <h1>Link</h1>
    <Story.Grid>
      <Story.Box>
        <Link onClick={e => e.preventDefault()}>A default link</Link>
      </Story.Box>
      <Story.Box>
        <Link variant="button" onClick={e => e.preventDefault()}>
          A default button link
        </Link>
      </Story.Box>
    </Story.Grid>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <Link color={color} onClick={e => e.preventDefault()}>
            {color} link
          </Link>
        </Story.Box>
        <Story.Box>
          <Link
            variant="button"
            color={color}
            onClick={e => e.preventDefault()}
          >
            {color} button link
          </Link>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Link',
}

export default Demo
