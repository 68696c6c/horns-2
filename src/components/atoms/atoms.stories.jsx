/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

export { default as Block } from './block/stories'
export { default as Button } from './button/stories'
export { default as Flex } from './flex/stories'
export { default as Grid } from './grid/stories'
export { default as Input } from './controls/input/stories'
export { default as Label } from './controls/label/stories'
export { default as Select } from './controls/select/stories'
export { default as Textarea } from './controls/textarea/stories'
export { default as Toggle } from './controls/toggle/stories'
export { default as Link } from './links/link/stories'
export { default as LinkEmail } from './links/link-email/stories'
export { default as LinkPhone } from './links/link-phone/stories'
export { default as Lists } from './lists/stories'
export { default as Message } from './message/stories'
export { default as Typography } from './typography/stories'

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
