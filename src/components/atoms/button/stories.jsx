import React from 'react'

import { colors } from '../../../config'

import Button from '.'

const Demo = () => (
  <>
    <h1>Button</h1>
    <Button>A default button</Button>
    {colors.map(color => (
      <div style={{ margin: '1em 0' }}>
        <Button color={color}>A {color} button</Button>
      </div>
    ))}
  </>
)

Demo.story = {
  name: 'Button',
}

export default Demo
