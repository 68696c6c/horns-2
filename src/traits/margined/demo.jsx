/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { spacingSizes } from '../../config/spacing'

import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Margined & Padded</h1>
    <p>
      The <em>margined</em> trait provides external spacing, or margin, to a
      component.
    </p>
    <p>
      The <em>padded</em> trait provides internal spacing, or padding, to a
      component.
    </p>
    {spacingSizes.map(size => (
      <Styled.BoxContainer>
        <Styled.Box margin={size}>Spacing: {size}</Styled.Box>
      </Styled.BoxContainer>
    ))}
  </>
)

Demo.story = {
  name: 'Margined & Padded',
}

export default Demo
