import React from 'react'
import { addParameters, configure, addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-emotion-theme'
// import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

// import { Theme } from '../src/config'
import HornsThemeProvider from '../src/components/theme-provider'

// const baseTheme = new Theme()
const theme1 = {
  name: 'horns-theme',
  colors: {
    colorways: {
      primary: 'red',
    },
  },
}
const ThemeDecorator = storyFn => (
  <HornsThemeProvider theme={theme1}>{storyFn()}</HornsThemeProvider>
)
// const themes = [theme1]
// console.log('theme 1', theme1)
// const withThemeProvider = cb => (
//   <HornsThemeProvider theme={theme1}>
//     {cb()}
//   </HornsThemeProvider>
// )
//
// addParameters({
//   options: {
//     theme: theme1,
//   },
// })

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.stories\.(js|jsx)$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addDecorator(withThemesProvider(themes))
addDecorator(ThemeDecorator)

configure(loadStories, module)
