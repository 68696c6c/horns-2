/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

export { default as Button } from './button/stories'
export { default as Link } from './link/link/stories'
export { default as LinkEmail } from './link/link-email/stories'
export { default as LinkPhone } from './link/link-phone/stories'

export const Index = () => (
  <>
    <p>
      Atoms are themable components that can’t be broken down any further
      without ceasing to be functional. They are composed of{' '}
      <A path="traits">Traits</A> and are the building blocks for more complex
      components. etc.
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
