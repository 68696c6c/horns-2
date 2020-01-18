import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

const ThemeProvider = ({ theme, children }) => console.log('theme provider', theme) || (
    <EmotionThemeProvider theme={theme}>
        {children}
    </EmotionThemeProvider>
  )

ThemeProvider.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
