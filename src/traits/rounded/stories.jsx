/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Styled from './stories.styles'

const Demo = () => (
  <>
    <h1>Rounded</h1>
    <p>
      The <em>rounded</em> trait provides border radius to a component based on
      a globally configured value.
    </p>
    <Styled.Box>This box is rounded.</Styled.Box>
  </>
)

Demo.story = {
  name: 'Rounded',
}

export default Demo
