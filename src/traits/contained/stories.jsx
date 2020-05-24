/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Styled from './stories.styles'

const Demo = () => (
  <>
    <h1>Contained</h1>
    <p>
      The <em>contained</em> trait provides border radius to a component based
      on a globally configured value.
    </p>
    <Styled.Container>
      <Styled.Box>This box is contained.</Styled.Box>
    </Styled.Container>
  </>
)

Demo.story = {
  name: 'Contained',
}

export default Demo
