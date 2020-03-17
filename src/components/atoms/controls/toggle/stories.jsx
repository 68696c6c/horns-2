/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Toggle, { toggleTypes } from '.'

const Demo = () => (
  <>
    <h1>Toggle</h1>
    <p>
      The <em>Toggle</em> component provides checkbox and radio input
      functionality with a themed presentation. other than{' '}
      <code>type=&quot;checkbox&quot;</code> It provides no additional behavior
      beyond what native HTML checkboxes and radios provide, e.g. toggle logic.
    </p>
    {toggleTypes.map(type => (
      <Story.Box>
        <label style={{ display: 'block' }}>{type}</label>
        <div>
          <Toggle
            id={`toggle-${type}-1`}
            name={`example-${type}`}
            type={type}
          />
        </div>
        <div>
          <Toggle
            id={`toggle-${type}-2`}
            name={`example-${type}`}
            type={type}
          />
        </div>
        <div>
          <Toggle
            id={`toggle-${type}-3`}
            name={`example-${type}`}
            type={type}
          />
        </div>
      </Story.Box>
    ))}
  </>
)

Demo.story = {
  name: 'Toggle',
}

export default Demo