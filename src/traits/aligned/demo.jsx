/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { alignments } from '../../config'

import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Aligned</h1>
    <p>
      The <em>aligned</em> trait provides text-alignment to a component.
    </p>

    {alignments.map(alignment => (
      <Styled.TextWrapper>
        <Styled.Text textAlign={alignment}>
          <Styled.Alignment>{alignment || 'default'}</Styled.Alignment> aligned
          text.
        </Styled.Text>
      </Styled.TextWrapper>
    ))}
  </>
)

Demo.story = {
  name: 'Aligned',
}

export default Demo
