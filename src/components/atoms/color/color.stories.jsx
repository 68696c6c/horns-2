import React from 'react'
// import { withThemesProvider } from 'storybook-addon-emotion-theme'

// import { Theme } from '../../../config'
import * as Styled from './styles'

export const ColorwayDemo = () => <Styled.Colorway>DEMO</Styled.Colorway>

ColorwayDemo.story = {
  name: 'Colorway Demo',
}

// const theme1 = new Theme()
// console.log('theme 1', theme1)
// const themes = [theme1]

export default {
  title: 'Color',
  component: ColorwayDemo,
  // decorators: [withThemesProvider(themes)]
}
