/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import * as Styled from './stories.styles'

const Demo = () => {
  return (
    <>
      <h1>inline</h1>
      <p>
        The <em>inline</em> trait provides CSS for forcing the height of a
        component to match the line height of the font style it uses.
      </p>
      <p>
        The <em>inline</em> trait is intended to be used in combination with the{' '}
        <em>typographic</em> trait.
      </p>
      <p>
        This trait can be used to force input elements that have native browser
        controls or icons to match the height of inputs that do not.
      </p>
      <Story.Box>
        <p>
          The datetime input below does not use the <em>inline</em> trait.
          Notice that it is not the same height as the text input next to it,
          allowing the orange background behind the text input to be visible.
        </p>
        <Styled.Wrapper>
          <Styled.UncontrolledInput
            id="inline-example-3"
            type="datetime-local"
          />
          <Styled.Input id="inline-example-4" type="text" />
        </Styled.Wrapper>
      </Story.Box>
      <Story.Box>
        <p>
          This datetime input uses the <em>inline</em> trait, forcing it to
          match the height of the text input beside it.
        </p>
        <Styled.Wrapper>
          <Styled.Input id="inline-example" type="datetime-local" />
          <Styled.Input id="inline-example-2" type="text" />
        </Styled.Wrapper>
      </Story.Box>
    </>
  )
}

Demo.story = {
  name: 'inline',
}

export default Demo
