/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import FormControl, { controlTypes } from '.'

const Demo = () => (
  <>
    <h1>FormControl</h1>
    <p>
      The <em>FormControl</em> component renders a form input and associated
      labels and validation messages based on state of a form form field.
    </p>
    {controlTypes.map(type => (
      <>
        <Story.Grid>
          <Story.Box>
            <FormControl
              type={type}
              id={`example-${type}-1`}
              name={`example_${type}_1`}
              label={type}
              placeholder={type}
              errorMessage="error message very very very very very very very very very very very very long"
              hasError
              options={[
                { key: 'One', value: 1 },
                { key: 'Two', value: 2 },
                { key: 'Three', value: 3 },
                { key: 'Four', value: 4 },
                { key: 'Five', value: 5 },
                { key: 'Six', value: 6 },
                { key: 'Seven', value: 7 },
                { key: 'Eight', value: 8 },
                { key: 'Nine', value: 9 },
                { key: 'Ten', value: 10 },
              ]}
            />
          </Story.Box>
          <Story.Box>
            <FormControl
              type={type}
              id={`example-${type}-2`}
              name={`example_${type}_2`}
              label={`horizontal ${type}`}
              placeholder={`horizontal ${type}`}
              errorMessage="error message very very very very very very very very very very very very long"
              hasError
              horizontal
              options={[
                { key: 'One', value: 1 },
                { key: 'Two', value: 2 },
                { key: 'Three', value: 3 },
                { key: 'Four', value: 4 },
                { key: 'Five', value: 5 },
                { key: 'Six', value: 6 },
                { key: 'Seven', value: 7 },
                { key: 'Eight', value: 8 },
                { key: 'Nine', value: 9 },
                { key: 'Ten', value: 10 },
              ]}
            />
          </Story.Box>
        </Story.Grid>
      </>
    ))}
  </>
)

Demo.story = {
  name: 'FormControl',
}

export default Demo
