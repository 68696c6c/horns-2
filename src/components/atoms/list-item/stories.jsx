/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { FaSkull, FaSkullCrossbones, FaExclamationCircle } from 'react-icons/fa'

import * as Story from '_story'

import ListOrdered from '../list-ordered'
import ListUnordered from '../list-unordered'
import ListItem, { LI } from '.'

const Demo = () => (
  <>
    <h1>ListItem</h1>
    <p>
      The <em>ListOrdered</em> and <em>ListUnordered</em> components apply theme
      styling for the HTML <code>ol</code> and <code>ul</code> elements.
    </p>
    <p>
      The <em>ListItem</em> component applies theme styling to the HTML{' '}
      <code>li</code> element and is used with both ordered and unordered lists.
    </p>

    <h2>LI Alias</h2>
    <p>
      The <em>LI</em> component is an alias for <em>ListItem</em>.
    </p>
    <Story.Grid>
      <Story.Box>
        <ListOrdered>
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
        </ListOrdered>
      </Story.Box>
      <Story.Box>
        <ListUnordered>
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
        </ListUnordered>
      </Story.Box>
    </Story.Grid>

    <h2>Icon Prop</h2>
    <p>
      The <em>ListItem</em> component <em>icon</em> prop accepts a React
      component to use in place of a list marker.
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
  </>
)

Demo.story = {
  name: 'ListItem',
}

export default Demo
