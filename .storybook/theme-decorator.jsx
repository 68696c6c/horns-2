import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { Theme } from '../src/config'

const theme1 = new Theme()

const withThemeProvider = storyFn => (
  <ThemeProvider theme={theme1}>
    {storyFn()}
  </ThemeProvider>
)

export default withThemeProvider
