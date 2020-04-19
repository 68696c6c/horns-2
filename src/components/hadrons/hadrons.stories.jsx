/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

// export { default as Block } from './block/stories'

export const Index = () => (
  <>
    <p>
      Hadrons consist of two parts: Traits that made from compositions of other
      Traits and styled components that use those Traits. They are used to share
      common functionality between Atoms. Like Traits, they are not React
      Components, but objects that are used to set CSS rules. Unlike Traits,
      they are representations of UI elements (like Atoms) and deal with
      multiple CSS concerns and therefore they are named after the UI elements
      they represent (like Atoms), rather than the properties they set.
    </p>
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Hadrons',
  component: Index,
}
