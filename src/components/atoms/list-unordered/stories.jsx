/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { FaSkull } from 'react-icons/fa'

import * as Story from '_story'

import ListUnordered, { UL } from '.'
import ListItem, { LI } from '../list-item'

const Demo = () => (
  <>
    <h1>ListUnordered</h1>
    <p>
      The <em>ListUnordered</em> component applies theme styling for the HTML{' '}
      <code>ul</code> element.
    </p>
    <p>
      The <em>ListItem</em> component applies theme styling to the HTML{' '}
      <code>li</code> element and is used with both ordered and unordered lists.
    </p>

    <h2>UL Alias</h2>
    <p>
      The <em>UL</em> component is an alias for <em>ListUnordered</em>.
    </p>
    <Story.Grid>
      <Story.Box>
        <UL>
          <LI>item</LI>
          <LI icon={<FaSkull />}>icon item</LI>
          <LI>
            Balaam Kali Ili e-Ol balazodareji, od aala tahilanu-osnetaabe:
            daluga vaomesareji elonusa cape-mi-ali varoesa cala homila; Damballa
            soba ipame luipamis: das sobolo vepe zodomeda poamal, od bogira aai
            ta piape Piamoel od Vaoan! Zodacare, eca, od zodameranu! odo cicale
            Qaa
          </LI>
          <LI icon={<FaSkull />}>
            Shamad T'an-mo Dracula Balaam Micama! goho Pe-IAD! zodir com-selahe
            azodien biabe os-lon-dohe. Mormo Azazel elanu saha caelazod: Sedit
            Pilada noanu vaunalahe balata od-vaoan. das zodonurenusagi cab:
            Mormo Do-o-i-ape mada: goholore, gohus, amiranu! Micama!
          </LI>
        </UL>
      </Story.Box>
    </Story.Grid>

    <h2>Color and MarkerColor Props</h2>
    <Story.Grid>
      <Story.Box color="dark">
        <ListUnordered>
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
        </ListUnordered>
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
        <ListUnordered color="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem color="secondary">secondary item</ListItem>
          <ListItem color="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListUnordered>
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
      The <em>markerColor</em> prop should color only the marker (only works on
      native markers in Firefox and Safari >= 11.1).
    </p>
    <Story.Grid>
      <Story.Box color="dark">
        <ListUnordered markerColor="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem markerColor="secondary">secondary item</ListItem>
          <ListItem markerColor="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListUnordered>
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

    <h2>ListUnordered vs native ul</h2>
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
  </>
)

Demo.story = {
  name: 'ListsUnordered',
}

export default Demo
