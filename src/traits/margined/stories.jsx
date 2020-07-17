/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { sizes } from '../../config/sizing'

import * as Styled from './stories.styles'

const Demo = () => (
  <>
    <h1>Margined & Padded</h1>
    <p>
      The <em>margined</em> and <em>padded</em> traits are both driven by theme
      sizing.
    </p>
    <p>
      The <em>margined</em> trait provides margin, or spacing outside of the
      border box, to a component. Margin provides spacing between a component
      and its siblings. Margin is shown below in orange.
    </p>
    <p>
      The <em>padded</em> trait provides padding, or spacing inside of the
      border box, to a component. Padding provides spacing between a component
      and its children. Padding is shown in green below.
    </p>
    <p>
      The border box separates the external margin from the internal padding and
      is defined by the border of a component. The border is shown below in
      yellow.
    </p>
    <p>
      The inner content box is inside of the padding and is shown in blue. The
      content box is where a components children are rendered.
    </p>
    {sizes.map(size => (
      <Styled.BoxContainer>
        <Styled.Box padding={size} margin={size}>
          <Styled.BoxContent>Spacing: {size}</Styled.BoxContent>
        </Styled.Box>
      </Styled.BoxContainer>
    ))}
  </>
)

Demo.story = {
  name: 'Margined & Padded',
}

export default Demo
