/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Styled from './demo.styles'

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
