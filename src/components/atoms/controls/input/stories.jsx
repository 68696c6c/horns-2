/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Input, { inputTypes } from '.'

const Demo = () => (
  <>
    <h1>Input</h1>
    <p>
      The <em>Input</em> component applies theming to the HTML{' '}
      <code>input</code> tag. It provides no additional behavior.
    </p>
    {inputTypes.map(type => {
      const id = `input-${type}`
      return (
        <Story.Box>
          <label htmlFor={id} style={{ display: 'block' }}>
            {type}
          </label>
          <Input id={id} name="example" type={type} placeholder={type} />
        </Story.Box>
      )
    })}
  </>
)

Demo.story = {
  name: 'Input',
}

export default Demo
