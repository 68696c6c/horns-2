/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import Label from '.'

const Demo = () => (
  <>
    <h1>Label</h1>
    <p>
      The <em>Label</em> component applies theming to the HTML{' '}
      <code>label</code> tag and provides color theming for use as an alert in a
      form.
    </p>
    {colors.map(color => {
      const id = `example-${color}`
      return (
        <Story.Box>
          <Label htmlFor={id} color={color}>
            {color} label
          </Label>
          <input id={id} name={id} />
        </Story.Box>
      )
    })}
  </>
)

Demo.story = {
  name: 'Label',
}

export default Demo
