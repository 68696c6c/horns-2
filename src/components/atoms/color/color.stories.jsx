import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from '../../../config'
import * as Styled from './styles'

// const themes = [new Theme(), new Theme()]

const themeProviderDecorator = storyFn => (
  <ThemeProvider theme={new Theme()}>
    {storyFn()}
  </ThemeProvider>
)

export default {
  title: 'Color',
  decorators: [themeProviderDecorator],
}

export const Demo = () => <Styled.Colorway>DEMO</Styled.Colorway>

Demo.story = {
  name: 'Demo Div',
}
