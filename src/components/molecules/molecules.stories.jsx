/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

export { default as FormControl } from './form-control/stories'
export { default as ToggleGroup } from './toggle-group/stories'

export const Index = () => (
  <>
    <p>
      Molecules are simple components made from multiple{' '}
      <A path="traits">Atoms</A>.
    </p>
  </>
)

Index.story = {
  name: 'Index',
}

export default {
  title: 'Molecules',
  component: Index,
}
