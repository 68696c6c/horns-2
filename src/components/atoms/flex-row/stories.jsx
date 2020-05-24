/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import FlexRow from '.'

const Demo = () => (
  <>
    <h1>FlexRow</h1>
    <p>
      The <em>FlexRow</em> component arranges uses CSS flex properties to
      arrange its children horizontally.
    </p>
    <FlexRow color="dark" marginY="medium" style={{ height: '200px' }}>
      <Story.Box color="primary">Box 1</Story.Box>
      <Story.Box color="secondary">Box 2</Story.Box>
      <Story.Box color="tertiary">Box 3</Story.Box>
    </FlexRow>
  </>
)

Demo.story = {
  name: 'FlexRow',
}

export default Demo
