/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { spacingSizes } from '../../config/spacing'

import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Padded</h1>
    <p>
      The <em>padded</em> trait provides internal spacing, or padding, to a
      component.
    </p>
    {spacingSizes.map(size => (
      <Styled.Box padding={size}>
        <Styled.BoxContent>Spacing: {size}</Styled.BoxContent>
      </Styled.Box>
    ))}
  </>
)

Demo.story = {
  name: 'Padded',
}

export default Demo
