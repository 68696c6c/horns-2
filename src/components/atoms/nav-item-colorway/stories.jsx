/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import NavItemColorway from '.'

const Demo = () => (
  <>
    <h1>NavItemColorway</h1>
    <p>
      The <em>NavItemColorway</em> component provides a themed nav item that
      uses a configurable colorway to indicate that it is the current active
      item.
    </p>
    <p>@TODO: finish implementing this component.</p>

    <h2>Layout Prop</h2>
    <Story.Grid>
      <Story.Box>
        <NavItemColorway onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItemColorway>
      </Story.Box>
      <Story.Box>
        <NavItemColorway
          onClick={e => e.preventDefault()}
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemColorway>
      </Story.Box>
    </Story.Grid>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <NavItemColorway onClick={e => e.preventDefault()} color={color}>
            {color} nav item
          </NavItemColorway>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'NavItemColorway',
}

export default Demo
