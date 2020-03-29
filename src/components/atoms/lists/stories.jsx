/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaSkullCrossbones } from 'react-icons/fa'

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
    {/*<Story.Grid>*/}
    {/*  <Story.Box>*/}
    {/*    <ListOrdered>*/}
    {/*      {Story.makeIntArray(4).map(() => (*/}
    {/*        <ListItem>ordered item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListOrdered>*/}
    {/*  </Story.Box>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      {Story.makeIntArray(4).map(() => (*/}
    {/*        <ListItem>unordered item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListUnordered>*/}
    {/*  </Story.Box>*/}
    {/*</Story.Grid>*/}

    <h2>Nested Lists</h2>
    <Story.Grid>
      <Story.Box>
        <ListOrdered>
          <ListItem>ordered item</ListItem>
          <ListItem>ordered item</ListItem>
          <ListOrdered>
            <ListItem>ordered item</ListItem>
            <ListItem>ordered item</ListItem>
            <ListItem>ordered item</ListItem>
            <ListItem>ordered item</ListItem>
          </ListOrdered>
          <ListItem>ordered item</ListItem>
          <ListItem>ordered item</ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ol>
          <li>item</li>
          <li>item</li>
          <ol>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ol>
          <li>item</li>
          <li>item</li>
        </ol>
      </Story.Box>
    </Story.Grid>

    {/*<h2>Type Prop</h2>*/}
    {/*<p>*/}
    {/*  The <em>ListOrdered</em> and <em>ListUnordered</em> components accept a{' '}*/}
    {/*  <em>type</em> prop determines what kind of marker to use for the list*/}
    {/*  items.*/}
    {/*</p>*/}
    {/*<p>*/}
    {/*  The <em>ListItem</em> component also accepts a <em>type</em> prop that*/}
    {/*  will take priority over the marker of the parent list.*/}
    {/*</p>*/}
    {/*<p>*/}
    {/*  The <em>type</em> prop accepts any value accepted by the{' '}*/}
    {/*  <code>list-style-type</code> CSS property.*/}
    {/*</p>*/}
    {/*<Story.Grid>*/}
    {/*  <Story.Box>*/}
    {/*    <ListOrdered>*/}
    {/*      <ListItem>default ordered item</ListItem>*/}
    {/*      {listTypes.ordered.map(i => (*/}
    {/*        <ListItem type={i}>{i} ordered item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListOrdered>*/}
    {/*  </Story.Box>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      <ListItem>default unordered item</ListItem>*/}
    {/*      {listTypes.unordered.map(i => (*/}
    {/*        <ListItem type={i}>{i} unordered item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListUnordered>*/}
    {/*  </Story.Box>*/}
    {/*</Story.Grid>*/}

    {/*<Story.Grid>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      {Story.makeIntArray(10).map(i => (*/}
    {/*        <ListItem>unordered item {i}</ListItem>*/}
    {/*      ))}*/}
    {/*      <ListItem>*/}
    {/*        Ili e-Ol balazodareji, od aala tahilanu-os netaabe: daluga*/}
    {/*        vaomesareji elonusa cape-mi-ali varoesa cala homila; Azazel*/}
    {/*        qui-i-inu toltoregi cahisa i cahisaji em ozodien; Pilada noanu*/}
    {/*        vaunalahe balata od-vaoan. Micama! goho Pe-IAD! zodir com-selahe*/}
    {/*        azodien biabe os-lon-dohe.*/}
    {/*      </ListItem>*/}
    {/*      <ListItem type="circle">circle item</ListItem>*/}
    {/*      <ListItem type="none">none item</ListItem>*/}
    {/*      <ListItem type="square">square item</ListItem>*/}
    {/*    </ListUnordered>*/}
    {/*  </Story.Box>*/}
    {/*  <Story.Box>*/}
    {/*    <ListOrdered>*/}
    {/*      {Story.makeIntArray(10).map(i => (*/}
    {/*        <ListItem>ordered item {i}</ListItem>*/}
    {/*      ))}*/}
    {/*      <ListItem>ordered item 11</ListItem>*/}
    {/*      <ListItem counter={100}>ordered item 100</ListItem>*/}
    {/*    </ListOrdered>*/}
    {/*  </Story.Box>*/}
    {/*</Story.Grid>*/}

    {/*<h2>Color Prop</h2>*/}
    {/*<p>*/}
    {/*  The <em>ListOrdered</em> and <em>ListUnordered</em> components accept a{' '}*/}
    {/*  <em>color</em> prop that colors the list item markers, but not the font*/}
    {/*  color of the items.*/}
    {/*</p>*/}
    {/*<p>*/}
    {/*  The <em>ListItem</em> component also accepts a <em>color</em> prop that*/}
    {/*  will take priority over the color of the parent list.*/}
    {/*</p>*/}
    {/*{colors.map(color => (*/}
    {/*  <Story.Grid>*/}
    {/*    <Story.Box>*/}
    {/*      <ListOrdered color={color}>*/}
    {/*        {makeItems(color)}*/}
    {/*        {actionItems()}*/}
    {/*      </ListOrdered>*/}
    {/*    </Story.Box>*/}
    {/*    <Story.Box>*/}
    {/*      <ListUnordered color={color}>*/}
    {/*        {makeItems(color)}*/}
    {/*        {actionItems()}*/}
    {/*      </ListUnordered>*/}
    {/*    </Story.Box>*/}
    {/*  </Story.Grid>*/}
    {/*))}*/}
  </>
)

Demo.story = {
  name: 'Lists',
}

export default Demo
