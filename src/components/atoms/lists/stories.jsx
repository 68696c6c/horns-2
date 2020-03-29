/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaSkull, FaSkullCrossbones, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa'

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
    {/*        <ListItem>item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListOrdered>*/}
    {/*  </Story.Box>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      {Story.makeIntArray(4).map(() => (*/}
    {/*        <ListItem>unitem</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListUnordered>*/}
    {/*  </Story.Box>*/}
    {/*</Story.Grid>*/}

    <h2>Unordered Lists</h2>
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
          <ListItem icon={<FaInfoCircle />}>item</ListItem>
        </ListUnordered>
      </Story.Box>
      <Story.Box>
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
        <ListOrdered type="l">
          <ListItem>item</ListItem>
          <ListItem>item</ListItem>
          <ListOrdered type="l">
            <ListItem>item</ListItem>
            <ListItem value={100} type="l">item with value</ListItem>
          </ListOrdered>
          <ListItem>item</ListItem>
          <ListItem value={100} type="l">item with value</ListItem>
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
    {/*      <ListItem>default item</ListItem>*/}
    {/*      {listTypes.ordered.map(i => (*/}
    {/*        <ListItem type={i}>{i} item</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListOrdered>*/}
    {/*  </Story.Box>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      <ListItem>default unitem</ListItem>*/}
    {/*      {listTypes.unordered.map(i => (*/}
    {/*        <ListItem type={i}>{i} unitem</ListItem>*/}
    {/*      ))}*/}
    {/*    </ListUnordered>*/}
    {/*  </Story.Box>*/}
    {/*</Story.Grid>*/}

    {/*<Story.Grid>*/}
    {/*  <Story.Box>*/}
    {/*    <ListUnordered>*/}
    {/*      {Story.makeIntArray(10).map(i => (*/}
    {/*        <ListItem>unitem {i}</ListItem>*/}
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
    {/*        <ListItem>item {i}</ListItem>*/}
    {/*      ))}*/}
    {/*      <ListItem>item 11</ListItem>*/}
    {/*      <ListItem counter={100}>item 100</ListItem>*/}
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
