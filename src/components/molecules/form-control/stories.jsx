/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import FormControl, { controlTypes } from '.'

const options = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
]

const Demo = () => (
  <>
    <h1>FormControl</h1>
    <p>
      The <em>FormControl</em> component renders a form input and associated
      labels and validation messages based on state of a form form field.
    </p>
    <Story.Grid style={{ alignItems: 'start' }}>
      <Story.Box>
        {controlTypes.map(type => (
          <FormControl
            type={type}
            id={`example-${type}-1`}
            name={`example_${type}_1`}
            label={type}
            placeholder={type}
            options={options}
          />
        ))}
      </Story.Box>
      <Story.Box>
        {controlTypes.map(type => (
          <FormControl
            type={type}
            id={`example-${type}-2`}
            name={`example_${type}_2`}
            label={type}
            placeholder={type}
            options={options}
            errorMessage="error message very very very very very very very very very very very very long"
            hasError
          />
        ))}
      </Story.Box>
      <Story.Box>
        {controlTypes.map(type => (
          <FormControl
            type={type}
            id={`example-${type}-3`}
            name={`example_${type}_3`}
            label={type}
            placeholder={type}
            options={options}
            horizontal
          />
        ))}
      </Story.Box>
      <Story.Box>
        {controlTypes.map(type => (
          <FormControl
            type={type}
            id={`example-${type}-4`}
            name={`example_${type}_4`}
            label={`horizontal ${type}`}
            placeholder={`horizontal ${type}`}
            options={options}
            errorMessage="error message"
            hasError
            horizontal
          />
        ))}
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'FormControl',
}

export default Demo
