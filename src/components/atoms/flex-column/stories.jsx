/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import FlexColumn from '.'

const Demo = () => (
  <>
    <h1>FlexColumn</h1>
    <p>
      The <em>FlexColumn</em> component arranges uses CSS flex properties to
      arrange its children vertically.
    </p>
    <FlexColumn color="dark" marginY="medium" style={{ height: '400px' }}>
      <Story.Box color="primary">Box 1</Story.Box>
      <Story.Box color="secondary">Box 2</Story.Box>
      <Story.Box color="tertiary">Box 3</Story.Box>
    </FlexColumn>
  </>
)

Demo.story = {
  name: 'FlexColumn',
}

export default Demo
