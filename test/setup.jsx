import React from 'react'
import PropTypes from 'prop-types'
import { render as rtlRender } from '@testing-library/react'

import { ThemeProvider } from '../src'

export * from '@testing-library/react'

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export const render = (ui, options) =>
  rtlRender(ui, { wrapper: Wrapper, ...options })
