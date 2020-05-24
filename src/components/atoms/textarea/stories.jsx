/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Textarea from '.'

const Demo = () => (
  <>
    <h1>Textarea</h1>
    <p>
      The <em>Textarea</em> component applies theming to the HTML{' '}
      <code>textarea</code> tag.
    </p>
    <Story.Label htmlFor="textarea-example">textarea</Story.Label>
    <Textarea id="textarea-example" name="textarea_example">henlo</Textarea>
  </>
)

Demo.story = {
  name: 'Textarea',
}

export default Demo
