/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import LinkPhone from '.'

const Demo = () => (
  <>
    <h1>LinkPhone</h1>
    <Story.Grid>
      <Story.Box>
        <LinkPhone phone="123-456-7890">A default phone link</LinkPhone>
      </Story.Box>
      <Story.Box>
        <LinkPhone variant="button" phone="123-456-7890">
          A default button phone link
        </LinkPhone>
      </Story.Box>
    </Story.Grid>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <LinkPhone color={color} phone="123-456-7890">
            {color} phone link
          </LinkPhone>
        </Story.Box>
        <Story.Box>
          <LinkPhone variant="button" color={color} phone="123-456-7890">
            {color} button phone link
          </LinkPhone>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  title: 'LinkPhone',
  name: 'LinkPhone',
}

export default Demo
