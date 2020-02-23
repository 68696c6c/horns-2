/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Interactive</h1>
    <p>
      The <em>interactive</em> trait provides a custom mouse cursor to a
      component and enables the state variations of other traits.
    </p>

    <h2>Cursor</h2>
    <p>
      The <em>cursor</em> prop allows you to specify a CSS mouse cursor to be
      displayed when pointing to a component.
    </p>
    <Styled.Wrapper>
      <Styled.Text cursor="pointer">This text uses a pointer cursor.</Styled.Text>
    </Styled.Wrapper>

    <h2>Chromatic</h2>
    <p>
      When the <em>interactive</em> trait is used in combination with the{' '}
      <em>chromatic</em> trait, any hover state color changes specified by the
      components colorway will be enabled.
    </p>
    <Styled.Wrapper>
      <Styled.Box cursor="grab" color="primary">
        This box uses a grab cursor and changes color on hover.
      </Styled.Box>
    </Styled.Wrapper>

    <h2>Typographic</h2>
    <p>
      When the <em>interactive</em> trait is used in combination with the{' '}
      <em>typographic</em> trait, any hover state text-decoration specified by
      the components font style will be enabled.
    </p>
    <Styled.Wrapper>
      <Styled.Text cursor="not-allowed" color="secondary">
        This text uses a not-allowed cursor and shows an underline on hover.
      </Styled.Text>
    </Styled.Wrapper>
    <Styled.Wrapper>
      <Styled.Box cursor="progress" color="tertiary" font="link">
        This box uses a progress cursor and changes color with an underline on
        hover.
      </Styled.Box>
    </Styled.Wrapper>
  </>
)

Demo.story = {
  name: 'Interactive',
}

export default Demo
