/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import NavItem from '.'

const Demo = () => (
  <>
    <h1>NavItem</h1>
    <Story.Grid>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()}>A default nav item</NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()} current>
          A current nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()} layout="vertical" current>
          A current nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>

    <h2>Layout Prop</h2>
    <Story.Grid>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()} layout="vertical" current>
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>

    <h2>Border Variant</h2>
    <p>
      The <em>currentColor</em>, <em>currentWidth</em>, and{' '}
      <em>currentStyle</em> props control the properties of the <em>current</em>{' '}
      indicator when <code>variant=&quot;border&quot;</code>.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItem onClick={e => e.preventDefault()} color="secondary" current>
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="tertiary"
          layout="vertical"
          current
        >
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="neutral"
          currentColor="success"
          currentStyle="dotted"
          current
        >
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="neutral"
          layout="vertical"
          currentColor="info"
          currentWidth="xxSmall"
          current
        >
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>

    <h2>Background Variant</h2>
    <p>
      The <em>currentColor</em> prop controls the color of the <em>current</em>{' '}
      item when <code>variant=&quot;background&quot;</code>.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="secondary"
          variant="background"
          current
        >
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="tertiary"
          layout="vertical"
          variant="background"
          current
        >
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="neutral"
          variant="background"
          currentColor="success"
          current
        >
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="neutral"
          layout="vertical"
          variant="background"
          currentColor="info"
          current
        >
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>

    <h2>Underline Variant</h2>
    <Story.Grid>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="secondary"
          variant="underline"
          current
        >
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          onClick={e => e.preventDefault()}
          color="tertiary"
          layout="vertical"
          variant="underline"
          current
        >
          current vertical nav item
        </NavItem>
      </Story.Box>
    </Story.Grid>

    <h2>Color Prop</h2>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <NavItem onClick={e => e.preventDefault()} color={color}>
            {color} nav item
          </NavItem>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'NavItem',
}

export default Demo
