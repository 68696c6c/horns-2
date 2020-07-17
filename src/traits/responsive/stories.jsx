/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Styled from './stories.styles'

const Demo = () => (
  <>
    <h1>Responsive</h1>
    <p>
      The <em>rounded</em> trait provides border radius to a component based on
      a globally configured value.
    </p>
    <Styled.Box>This box changes color at the mobile breakpoint.</Styled.Box>
  </>
)

Demo.story = {
  name: 'Responsive',
}

export default Demo
