import React from 'react'

import { Colors } from './demo-components'

export const Index = () => (
  <>
    <p>
      Traits are qualities like color, responsiveness, spacing, etc. They are
      not React Components, but Emotion CSS snippets that can be composed into
      Styled Components.
    </p>
    <h1>Colors</h1>
    <Colors />
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Traits',
}
