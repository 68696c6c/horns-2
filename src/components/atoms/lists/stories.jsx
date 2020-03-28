/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaSkullCrossbones } from 'react-icons/fa'

import * as Story from '_story'
import { colors } from 'config'

import ListOrdered from './list-ordered'
import ListUnordered from './list-unordered'
import ListItem from './list-item'

const makeItems = colorName =>
  Story.makeIntArray(4).map(i => (
    <ListItem>
      {colorName} item {i}
    </ListItem>
  ))

const actionItems = () =>
  ['success', 'info', 'warning', 'danger'].map(i => (
    <ListItem color={i} icon={<FaSkullCrossbones />}>
      {i} item
    </ListItem>
  ))

const Demo = () => (
  <>
    <h1>Lists</h1>
    <Story.Grid>
      <Story.Box>
        <ListUnordered>
          {Story.makeIntArray(10).map(i => (
            <ListItem>unordered item {i}</ListItem>
          ))}
          <ListItem>
            very long text is long, very, very, very long, much too long
            really, if we're being honest, it really should have ended
            long ago, why are you still reading this, this is a catastrophe
          </ListItem>
          <ListItem type="circle">circle item</ListItem>
          <ListItem type="none">none item</ListItem>
          <ListItem type="square">square item</ListItem>
        </ListUnordered>
      </Story.Box>
      <Story.Box>
        <ol>
          {Story.makeIntArray(10).map(i => (
            <li>native ordered item {i}</li>
          ))}
          <li>native ordered item 100</li>
        </ol>
      </Story.Box>
      <Story.Box>
        <ListOrdered>
          {Story.makeIntArray(10).map(i => (
            <ListItem>ordered item {i}</ListItem>
          ))}
          <ListItem>ordered item 11</ListItem>
          <ListItem counter={100}>ordered item 100</ListItem>
        </ListOrdered>
      </Story.Box>
    </Story.Grid>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <ListUnordered color={color} type="square">
            {makeItems(color)}
            {actionItems()}
          </ListUnordered>
        </Story.Box>
        <Story.Box>
          <ListOrdered color={color}>
            {makeItems(color)}
            {actionItems()}
          </ListOrdered>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Lists',
}

export default Demo
