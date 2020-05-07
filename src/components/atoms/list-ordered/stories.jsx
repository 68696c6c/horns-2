/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { FaSkull } from 'react-icons/fa'

import * as Story from '_story'

import ListOrdered, { OL } from '.'
import ListItem, { LI } from '../list-item'

const Demo = () => (
  <>
    <h1>ListOrdered</h1>
    <p>
      The <em>ListOrdered</em> component applies theme styling for the HTML{' '}
      <code>ol</code> element.
    </p>
    <p>
      The <em>ListItem</em> component applies theme styling to the HTML{' '}
      <code>li</code> element and is used with both ordered and unordered lists.
    </p>

    <h2>OL Alias</h2>
    <p>
      The <em>OL</em> component is an alias for <em>ListOrdered</em>.
    </p>
    <Story.Grid>
      <Story.Box>
        <OL>
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
        </OL>
      </Story.Box>
    </Story.Grid>

    <h2>Color and MarkerColor Props</h2>
    <Story.Grid>
      <Story.Box color="dark">
        <ListOrdered>
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ListOrdered>
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
        </ListOrdered>
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
        <ListOrdered color="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem color="secondary">secondary item</ListItem>
          <ListItem color="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListOrdered>
      </Story.Box>
    </Story.Grid>
    <p>
      The <em>markerColor</em> prop should color only the marker (only works on
      native markers in Firefox and Safari >= 11.1).
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
        <ListOrdered markerColor="primary">
          <ListItem>primary item</ListItem>
          <ListItem icon={<FaSkull />}>primary icon item</ListItem>
          <ListItem markerColor="secondary">secondary item</ListItem>
          <ListItem markerColor="secondary" icon={<FaSkull />}>
            secondary icon item
          </ListItem>
        </ListOrdered>
      </Story.Box>
    </Story.Grid>

    <h2>ListOrdered vs native ol</h2>
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
  name: 'ListOrdered',
}

export default Demo
