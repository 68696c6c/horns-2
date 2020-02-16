/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Bordered</h1>
    <p>
      The <em>bordered</em> trait provides border width and style to a
      component. Border color is provided separately by the <em>chromatic</em>
      trait.
    </p>
    <Styled.Box>This box is bordered.</Styled.Box>
  </>
)

Demo.story = {
  name: 'Bordered',
}

export default Demo
