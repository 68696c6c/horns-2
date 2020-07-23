/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import NavItemBorder from '.'

const Demo = () => (
  <>
    <h1>NavItemBorder</h1>
    <p>
      The <em>NavItemBorder</em> component provides a themed nav item that
      uses a border to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em>, <em>currentWidth</em>, and{' '}
      <em>currentStyle</em> props control the properties of the <em>current</em>{' '}
      indicator when the <em>current</em> prop is true.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItemBorder
          onClick={e => e.preventDefault()}
          color="secondary"
          current
        >
          current horizontal nav item
        </NavItemBorder>
      </Story.Box>
      <Story.Box>
        <NavItemBorder
          onClick={e => e.preventDefault()}
          color="tertiary"
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemBorder>
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <NavItemBorder
          onClick={e => e.preventDefault()}
          color="neutral"
          currentColor="success"
          currentStyle="dotted"
          current
        >
          current horizontal nav item
        </NavItemBorder>
      </Story.Box>
      <Story.Box>
        <NavItemBorder
          onClick={e => e.preventDefault()}
          color="neutral"
          layout="vertical"
          currentColor="info"
          currentWidth="xxSmall"
          current
        >
          current vertical nav item
        </NavItemBorder>
      </Story.Box>
    </Story.Grid>

    <h2>Layout Prop</h2>
    <Story.Grid>
      <Story.Box>
        <NavItemBorder onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItemBorder>
      </Story.Box>
      <Story.Box>
        <NavItemBorder
          onClick={e => e.preventDefault()}
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItemBorder>
      </Story.Box>
    </Story.Grid>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <NavItemBorder onClick={e => e.preventDefault()} color={color}>
            {color} nav item
          </NavItemBorder>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'NavItemBorder',
}

export default Demo
