/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import _range from 'lodash.range'

import * as Story from '_story'

import ToggleGroup from '.'

const Demo = () => (
  <>
    <h1>ToggleGroup</h1>
    <p>
      The <em>ToggleGroup</em> component renders a set of <em>Toggle</em>{' '}
      options.
    </p>
    {_range(2, 21).map(count => {
      const options = []
      for (let i = 1; i <= count; i += 1) {
        options.push({
          key: `Option ${i} very very very long`,
          value: i,
        })
      }
      return (
        <>
          <Story.Box key={count}>
            <h4>{count} Radio Toggles</h4>
            <ToggleGroup
              type="radio"
              id={`example-radio-${count}`}
              name={`example_radio_${count}`}
              errorMessage="error message very very very very very very very very very very very very long"
              hasError
              options={options}
            />
          </Story.Box>
          <Story.Box>
            <h4>{count} Checkbox Toggles</h4>
            <ToggleGroup
              type="checkbox"
              id={`example-checkbox-${count}`}
              name={`example_checkbox_${count}`}
              errorMessage="error message very very very very very very very very very very very very long"
              hasError
              options={options}
            />
          </Story.Box>
        </>
      )
    })}
  </>
)

Demo.story = {
  name: 'ToggleGroup',
}

export default Demo
