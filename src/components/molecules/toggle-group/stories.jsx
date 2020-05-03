/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import ToggleGroup from '.'

const optionsShort = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
  { key: 'Five', value: 5 },
]
const optionsLong = [
  ...optionsShort,
  { key: 'Six', value: 6 },
  { key: 'Seven', value: 7 },
  { key: 'Eight', value: 8 },
  { key: 'Nine', value: 9 },
  { key: 'Ten', value: 10 },
]

const Demo = () => (
  <>
    <h1>ToggleGroup</h1>
    <p>
      The <em>ToggleGroup</em> component renders a set of <em>Toggle</em>{' '}
      options.
    </p>
    <Story.Grid>
      <Story.Box>
        <ToggleGroup
          type="radio"
          id="example-radio-1"
          name="example_radio_1"
          label="Radios"
          errorMessage="error message very very very very very very very very very very very very long"
          hasError
          options={optionsShort}
        />
      </Story.Box>
      <Story.Box>
        <ToggleGroup
          type="checkbox"
          id="example-checkbox-1"
          name="example_checkbox_1"
          label="Checkboxes"
          errorMessage="error message very very very very very very very very very very very very long"
          hasError
          options={optionsShort}
        />
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <ToggleGroup
          type="radio"
          id="example-radio-2"
          name="example_radio_2"
          label="Radios Long"
          errorMessage="error message very very very very very very very very very very very very long"
          hasError
          options={optionsLong}
        />
      </Story.Box>
      <Story.Box>
        <ToggleGroup
          type="checkbox"
          id="example-checkbox-2"
          name="example_checkbox_2"
          label="Checkboxes Long"
          errorMessage="error message very very very very very very very very very very very very long"
          hasError
          options={optionsLong}
        />
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'ToggleGroup',
}

export default Demo
