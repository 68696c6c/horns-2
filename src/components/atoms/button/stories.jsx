/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Wrapper } from '_story'
import { colors } from 'config'

import Button from '.'

const Demo = () => (
  <>
    <h1>Button</h1>
    <Button onClick={action('clicked')}>A default button</Button>
    <Wrapper>
      <Button onClick={action('clicked')} color="prominent" typographic>
        An outlined button
      </Button>
    </Wrapper>
    {colors.map(color => (
      <Wrapper>
        <Button color={color}>{color} button</Button>
      </Wrapper>
    ))}
  </>
)

Demo.story = {
  name: 'Button',
}

export default Demo
