/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

const Demo = () => (
  <>
    <h1>Textual Trait</h1>
    <p>The textual trait provides font-styling to a component.</p>
    <h1>Contained Trait</h1>
    <p>
      The contained trait provides container centering behavior to fluid
      components.
    </p>
    <h1>Padded Trait</h1>
    <p>The padded trait provides internal spacing to components.</p>
    <h1>Spaced Trait</h1>
    <p>The spaced trait provides external spacing to components.</p>
    <h1>Responsive Trait</h1>
    <p>
      The responsive trait allows components to change their styling based on
      the window size.
    </p>
  </>
)

Demo.story = {
  name: 'ToDo',
}

export default Demo
