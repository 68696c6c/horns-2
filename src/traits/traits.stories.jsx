/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

export { default as Bordered } from './bordered/demo'
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

    <h1>Bordered Trait</h1>
    <p>
      The <em>bordered</em> trait provides border width and style to a
      component.
    </p>

    <h1>Chromatic Trait</h1>
    <p>
      The <em>chromatic</em> trait provides background, border, and/or font
      color to a component.
    </p>

    <h1>Typographic Trait</h1>
    <p>
      The <em>typographic</em> trait provides font-styling to a component.
    </p>

    <h1>Contained Trait</h1>
    <p>
      The <em>contained</em> trait provides container centering behavior to
      fluid components.
    </p>

    <h1>Margined Trait</h1>
    <p>
      The <em>margined</em> trait provides external spacing to a component.
    </p>

    <h1>Padded Trait</h1>
    <p>
      The <em>padded</em> trait provides internal spacing to a component.
    </p>

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
