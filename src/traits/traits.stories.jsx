/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

export { default as Aligned } from './aligned/demo'
export { default as Bordered } from './bordered/demo'
export { default as Chromatic } from './chromatic/demo'
export { default as Contained } from './contained/demo'
export { default as Gridded } from './gridded/demo'
export { default as Interactive } from './interactive/demo'
export { default as Margined } from './margined/demo'
export { default as Responsive } from './responsive/demo'
export { default as Rounded } from './rounded/demo'
export { default as Typographic } from './typographic/demo'

export const Index = () => (
  <>
    <p>
      Traits are qualities like color, responsiveness, spacing, etc. They are
      not React Components, but Emotion CSS snippets that can be composed into
      Styled Components.
    </p>

    <h1>Aligned Trait</h1>
    <p>
      The <em>aligned</em> trait provides text-alignment to a component.
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

    <h1>Contained Trait</h1>
    <p>
      The <em>contained</em> trait provides container centering behavior to
      fluid components.
    </p>

    <h1>Gridded</h1>
    <p>
      The <em>gridded</em> trait organizes the children of a component into
      wrapping columns.
    </p>

    <h1>Interactive</h1>
    <p>
      The <em>interactive</em> trait provides a custom mouse cursor to a
      component and enables the state variations of other traits.
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

    <h1>Rounded Trait</h1>
    <p>
      The <em>rounded</em> trait provides border-radius to a component.
    </p>

    <h1>Typographic Trait</h1>
    <p>
      The <em>typographic</em> trait provides font-styling to a component.
    </p>
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Traits',
}
