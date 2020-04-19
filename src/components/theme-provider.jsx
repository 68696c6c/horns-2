import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { Theme } from '../config'

const ThemeProvider = ({ theme: themeConfig, children }) => {
  const theme = new Theme(themeConfig)

  const GlobalStyles = () => (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
        }
      `}
    />
  )

  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </EmotionThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
