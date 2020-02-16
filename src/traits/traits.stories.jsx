import React from 'react'

export { default as Chromatic } from './chromatic/demo'
export { default as Typographic } from './typographic/demo'
export { default as Margined } from './margined/demo'

export const Index = () => (
  <>
    <p>
      Traits are qualities like color, responsiveness, spacing, etc. They are
      not React Components, but Emotion CSS snippets that can be composed into
      Styled Components.
    </p>

    <h1>Chromatic Trait</h1>
    <p>
      The chromatic trait provides background and/or font color to a component.
    </p>

    <h1>Typographic Trait</h1>
    <p>The typographic trait provides font-styling to a component.</p>

    <h1>Contained Trait</h1>
    <p>
      The contained trait provides container centering behavior to fluid
      components.
    </p>

    <h1>Margined Trait</h1>
    <p>The margined trait provides external spacing to a component.</p>

    <h1>Padded Trait</h1>
    <p>The padded trait provides internal spacing to a component.</p>

    <h1>Responsive Trait</h1>
    <p>
      The responsive trait allows components to change their styling based on
      the window size.
    </p>
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Traits',
}
