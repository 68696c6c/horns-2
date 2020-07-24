/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import NavItemUnderline from '.'

const Demo = () => (
  <>
    <h1>NavItemUnderline</h1>
    <p>
      The <em>NavItemUnderline</em> component provides a themed nav item that
      uses a typographic underline to indicate that it is the current active
      item.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItemUnderline
          onClick={e => e.preventDefault()}
          color="secondary"
          current
        >
          current horizontal nav item
        </NavItemUnderline>
      </Story.Box>
      <Story.Box>
        <NavItemUnderline
          onClick={e => e.preventDefault()}
          color="tertiary"
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemUnderline>
      </Story.Box>
    </Story.Grid>

    <h2>Layout Prop</h2>
    <Story.Grid>
      <Story.Box>
        <NavItemUnderline onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItemUnderline>
      </Story.Box>
      <Story.Box>
        <NavItemUnderline
          onClick={e => e.preventDefault()}
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemUnderline>
      </Story.Box>
    </Story.Grid>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <NavItemUnderline onClick={e => e.preventDefault()} color={color}>
            {color} nav item
          </NavItemUnderline>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'NavItemUnderline',
}

export default Demo
