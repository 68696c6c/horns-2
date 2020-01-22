import React from 'react'

export { default as Chromatic } from './chromatic/demo'

export const Index = () => (
  <p>
    Traits are qualities like color, responsiveness, spacing, etc. They are not
    React Components, but Emotion CSS snippets that can be composed into Styled
    Components.
  </p>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Traits',
}
