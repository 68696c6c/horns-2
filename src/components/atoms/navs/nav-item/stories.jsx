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

    <h2>Current Prop</h2>
    <p>
      The <em>borderColor</em>, <em>borderWidth</em>, and <em>borderStyle</em> props control the
      properties of the <em>current</em> indicator when <code>variant=&quot;border&quot;</code>.
    </p>
    <Story.Grid>
      <Story.Box>
        <NavItem color="secondary" onClick={e => e.preventDefault()} current>
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          color="tertiary"
          onClick={e => e.preventDefault()}
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
          color="neutral"
          onClick={e => e.preventDefault()}
          borderColor="success"
          borderStyle="dotted"
          current
        >
          current horizontal nav item
        </NavItem>
      </Story.Box>
      <Story.Box>
        <NavItem
          color="neutral"
          onClick={e => e.preventDefault()}
          layout="vertical"
          borderColor="info"
          borderWidth="xxSmall"
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
          <NavItem color={color} onClick={e => e.preventDefault()}>
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
