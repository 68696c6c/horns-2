/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { action } from '@storybook/addon-actions'

import { colors } from '../../../config'

import Button from '.'

const Demo = () => (
  <>
    <h1>Button</h1>
    <Button onClick={action('clicked')}>A default button</Button>
    {colors.map(color => (
      <div style={{ margin: '1em 0' }}>
        <Button color={color}>{color} button</Button>
      </div>
    ))}
  </>
)

Demo.story = {
  name: 'Button',
}

export default Demo
