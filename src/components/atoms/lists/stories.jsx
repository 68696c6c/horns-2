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
    <ListItem color={i} icon={<FaSkull />}>
      {i} item
    </ListItem>
  ))

const Demo = () => (
  <>
    <h1>Lists</h1>
    <Story.Grid>
      <Story.Box>
        <List>
          {Story.makeIntArray(10).map(i => (
            <ListItem>unordered item {i}</ListItem>
          ))}
          <ListItem>unordered item 100</ListItem>
        </List>
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
        <List ordered>
          {Story.makeIntArray(10).map(i => (
            <ListItem>ordered item {i}</ListItem>
          ))}
          <ListItem>ordered item 11</ListItem>
          <ListItem counter={100}>ordered item 100</ListItem>
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
