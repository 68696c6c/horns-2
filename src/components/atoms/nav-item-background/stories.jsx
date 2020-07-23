/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import NavItemBackground from '.'

const Demo = () => (
  <>
    <h1>NavItemBackground</h1>
    <p>
      The <em>NavItemBackground</em> component provides a themed nav item that
      uses a background color to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em> prop controls the color of the item when the{' '}
      <em>current</em> prop is true.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItemBackground
          onClick={e => e.preventDefault()}
          color="dark"
        >
          horizontal nav item
        </NavItemBackground>
      </Story.Box>
      <Story.Box>
        <NavItemBackground
          onClick={e => e.preventDefault()}
          layout="vertical"
          color="neutral"
        >
          vertical nav item
        </NavItemBackground>
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <NavItemBackground
          onClick={e => e.preventDefault()}
          color="dark"
          currentColor="primary"
          current
        >
          current horizontal nav item
        </NavItemBackground>
      </Story.Box>
      <Story.Box>
        <NavItemBackground
          onClick={e => e.preventDefault()}
          layout="vertical"
          color="neutral"
          currentColor="primary"
          current
        >
          current vertical nav item
        </NavItemBackground>
      </Story.Box>
    </Story.Grid>

    <h2>Layout Prop</h2>
    <Story.Grid>
      <Story.Box>
        <NavItemBackground onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItemBackground>
      </Story.Box>
      <Story.Box>
        <NavItemBackground
          onClick={e => e.preventDefault()}
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemBackground>
      </Story.Box>
    </Story.Grid>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <NavItemBackground onClick={e => e.preventDefault()} color={color}>
            {color} nav item
          </NavItemBackground>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'NavItemBackground',
}

export default Demo
