/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaCheckCircle,
  FaSkull,
} from 'react-icons/fa'

import * as Story from '_story'
import { colors } from 'config'

import Link from '../links/link'

import List from './list'
import ListItem from './item'

const makeItems = colorName =>
  Story.makeIntArray(4).map(i => (
    <ListItem>
      {colorName} item {i}
    </ListItem>
  ))

const actionItems = () =>
  ['success', 'info', 'warning', 'danger'].map(i => (
    <ListItem color={i} icon={FaSkull}>
      {i} item
    </ListItem>
  ))

const Demo = () => (
  <>
    <h1>Lists</h1>
    <Story.Grid>
      <Story.Box>
        <List>
          <ListItem>unordered item 1</ListItem>
          <ListItem>unordered item 2</ListItem>
          <ListItem>unordered item 3</ListItem>
          <ListItem>unordered item 4</ListItem>
        </List>
      </Story.Box>
      <Story.Box>
        <List ordered>
          <ListItem>ordered item 1</ListItem>
          <ListItem>ordered item 2</ListItem>
          <ListItem>ordered item 3</ListItem>
          <ListItem>ordered item 4</ListItem>
        </List>
      </Story.Box>
    </Story.Grid>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <List color={color}>
            {makeItems(color)}
            {actionItems()}
          </List>
        </Story.Box>
        <Story.Box>
          <List color={color} ordered>
            {makeItems(color)}
            {actionItems()}
          </List>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Lists',
}

export default Demo
