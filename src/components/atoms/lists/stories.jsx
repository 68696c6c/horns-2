/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  FaSkull,
  FaSkullCrossbones,
  FaExclamationCircle,
  FaInfoCircle,
} from 'react-icons/fa'

import * as Story from '_story'
import { colors } from 'config'

import ListOrdered from './list-ordered'
import ListUnordered from './list-unordered'
import ListItem from './list-item'
import { listTypes } from './utils'

const makeItems = colorName =>
  Story.makeIntArray(2).map(i => (
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
    <p>
      The <em>ListOrdered</em> and <em>ListUnordered</em> components apply theme
      styling for the HTML <code>ol</code> and <code>ul</code> elements.
    </p>
    <p>
      The <em>ListItem</em> component applies theme styling to the HTML{' '}
      <code>li</code> element and is used with both ordered and unordered lists.
    </p>

    <h2>Color and MarkerColor Props</h2>
    <Story.Grid>
      <Story.Box color="dark">
        <ListOrdered>
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ListUnordered>
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
        </ListUnordered>
      </Story.Box>
    </Story.Grid>
    <p>
      The <em>color</em> prop should color both the marker and the text.
    </p>
    <Story.Grid>
      <Story.Box color="dark">
        <ListOrdered color="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem color="secondary">secondary item</ListItem>
          <ListItem color="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ListUnordered color="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem color="secondary">secondary item</ListItem>
          <ListItem color="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListUnordered>
      </Story.Box>
    </Story.Grid>
    <p>
      The <em>markerColor</em> prop should color only the marker (only works on native markers in Firefox and Safari >= 11.1).
    </p>
    <Story.Grid>
      <Story.Box color="dark">
        <ListOrdered markerColor="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem markerColor="secondary">secondary item</ListItem>
          <ListItem markerColor="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ListUnordered markerColor="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem markerColor="secondary">secondary item</ListItem>
          <ListItem markerColor="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListUnordered>
      </Story.Box>
    </Story.Grid>


    <h2>Icon Prop</h2>
    <p>
      The <em>ListItem</em> component icon prop accepts a React component to use
      in place of a list marker.
    </p>
    <Story.Grid>
      <Story.Box>
        <ListUnordered>
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListUnordered>
            <ListItem>item</ListItem>
            <ListItem icon={<FaSkull />}>item</ListItem>
          </ListUnordered>
          <ListItem icon={<FaExclamationCircle />}>item</ListItem>
          <ListItem icon={<FaSkullCrossbones />}>item</ListItem>
        </ListUnordered>
      </Story.Box>
    </Story.Grid>

    <h2>Unordered Lists</h2>
    <Story.Grid>
      <Story.Box>
        <h3>Horns</h3>
        <ListUnordered type="disc">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListUnordered type="circle">
            <ListItem>item</ListItem>
            <ListItem type="square">item with type</ListItem>
          </ListUnordered>
          <ListItem>item</ListItem>
          <ListItem type="square">item with type</ListItem>
        </ListUnordered>
        <ListUnordered type="square">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListUnordered type="none">
            <ListItem>item</ListItem>
            <ListItem type="circle">item with type</ListItem>
          </ListUnordered>
          <ListItem>item</ListItem>
          <ListItem type="disc">item with type</ListItem>
        </ListUnordered>
      </Story.Box>
      <Story.Box>
        <h3>Native</h3>
        <ul type="disc">
          <li>item</li>
          <li>item</li>
          <ul type="circle">
            <li>item</li>
            <li type="square">item with type</li>
          </ul>
          <li>item</li>
          <li type="square">item with type</li>
        </ul>
        <ul type="square">
          <li>item</li>
          <li>item</li>
          <ul type="none">
            <li>item</li>
            <li type="circle">item with type</li>
          </ul>
          <li>item</li>
          <li type="disc">item with type</li>
        </ul>
      </Story.Box>
    </Story.Grid>

    <h2>Ordered Lists</h2>
    <Story.Grid>
      <Story.Box>
        <h3>Horns</h3>
        <ListOrdered type="l">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListOrdered type="l">
            <ListItem>item</ListItem>
            <ListItem value={100} type="l">
              item with value
            </ListItem>
          </ListOrdered>
          <ListItem>item</ListItem>
          <ListItem value={100} type="l">
            item with value
          </ListItem>
        </ListOrdered>
        <ListOrdered type="A">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListOrdered type="a">
            <ListItem>item</ListItem>
            <ListItem value={100}>item with value</ListItem>
          </ListOrdered>
          <ListItem>item</ListItem>
          <ListItem value={100}>item with value</ListItem>
        </ListOrdered>
        <ListOrdered type="I">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListOrdered type="i">
            <ListItem>item</ListItem>
            <ListItem value={100}>item with value</ListItem>
          </ListOrdered>
          <ListItem>item</ListItem>
          <ListItem value={100}>item with value</ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <h3>Native</h3>
        <ol type="l">
          <li>item</li>
          <li>item</li>
          <ol type="l">
            <li>item</li>
            <li value={100}>item with value</li>
          </ol>
          <li>item</li>
          <li value={100}>item with value</li>
        </ol>
        <ol type="A">
          <li>item</li>
          <li>item</li>
          <ol type="a">
            <li>item</li>
            <li value={100}>item with value</li>
          </ol>
          <li>item</li>
          <li value={100}>item with value</li>
        </ol>
        <ol type="I">
          <li>item</li>
          <li>item</li>
          <ol type="i">
            <li>item</li>
            <li value={100}>item with value</li>
          </ol>
          <li>item</li>
          <li value={100}>item with value</li>
        </ol>
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Lists',
}

export default Demo
