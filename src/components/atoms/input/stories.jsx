/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { Box } from '_story'

import Input, { inputTypes } from '.'

const Demo = () => (
  <>
    <h1>Input</h1>
    <p>You know what it is fool</p>
    {inputTypes.map(type => {
      const id = `input-${type}`
      return (
        <Box>
          <label htmlFor={id} style={{ display: 'block' }}>{type}</label>
          <Input id={id} name="example" type={type} />
        </Box>
      )
    })}
  </>
)

Demo.story = {
  name: 'Input',
}

export default Demo
