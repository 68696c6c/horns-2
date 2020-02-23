import React from 'react'

export { default as Button } from './button/stories'

export const Index = () => (
  <>
    <p>Atoms are traits like Color, Responsiveness, Spacing, etc.</p>
    <p>
      Atoms can be composed into Molecules, like Typography, Inputs, or
      Surfaces.
    </p>
    <p>
      Molecules are used to build Organisms like DataTables, asynchronous Select
      boxes, Navs, etc.
    </p>
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Atoms',
  component: Index,
}
