/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Toggle, { toggleTypes, Checkbox, Radio } from '.'

const Demo = () => (
  <>
    <h1>Toggle</h1>
    <p>
      The <em>Toggle</em> component provides checkbox and radio input
      functionality with a themed presentation. other than{' '}
      <code>type=&quot;checkbox&quot;</code> It provides no additional behavior
      beyond what native HTML checkboxes and radios provide, e.g. toggle logic.
    </p>
    <Checkbox id="toggle-checkbox-0" name="toggle-checkbox-0" />
    <Radio id="toggle-radio-0" name="toggle-radio-0" />
    <Story.Grid>
      {toggleTypes.map(type => (
        <div>
          <Story.Label>{type}</Story.Label>
          <Toggle
            id={`toggle-${type}-1`}
            name={`example-${type}`}
            type={type}
          />
          <Toggle
            id={`toggle-${type}-2`}
            name={`example-${type}`}
            type={type}
          />
          <Toggle
            id={`toggle-${type}-3`}
            name={`example-${type}`}
            type={type}
          />
        </div>
      ))}
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Toggle',
}

export default Demo
