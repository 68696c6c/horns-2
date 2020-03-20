/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Input, { inputTypes } from '.'

const Demo = () => (
  <>
    <h1>Input</h1>
    <p>
      The <em>Input</em> component applies theming to the HTML{' '}
      <code>input</code> tag, other than <code>type=&quot;checkbox&quot;</code>{' '}
      and <code>type=&quot;radio&quot;</code>. It provides no additional
      behavior.
    </p>
    {inputTypes.map(type => {
      const id = `input-${type}`
      return (
        <Story.Box>
          <Story.Label htmlFor={id}>{type}</Story.Label>
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
