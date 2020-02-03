import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { chromatic, chromaticSurface, chromaticText } from '.'

const colorDemoCSS = ({ prominent, first, last, left, right }) =>
  css`
    padding: ${prominent ? '2em' : '1em'};
    border-style: solid;
    border-left-width: ${left ? '1em' : '0'};
    border-right-width: ${right ? '1em' : '0'};
    border-top-width: ${first ? '1em' : '0'};
    border-bottom-width: ${last ? '1em' : '0'};
  `

export const Color = styled.div(colorDemoCSS, ({ theme, color, tone }) => {
  const c = theme.color.getTone(`${color}.${tone}`)
  const readable = c.isDark() ? 'white' : 'black'
  return css`
    background: ${c.rgb().string()};
    color: ${readable};
    h3, h5 {
      margin: 0 0 0.5em;
    }
    small {
      display: block;
    }
  `
})

Color.defaultProps = {
  interactive: false,
}

export const Colorway = styled.div(
  ...chromatic.styles,
  colorDemoCSS,
  ({ theme, color }) => {
    const c = theme.color.getColorway(color)
    const { base, inactive, hover, active } = c
    return css`
      &::after {
        content: "base L: ${base.data.luminosity}";
      }
      &:hover::after {
        content: "hover L: ${hover.data.luminosity}";
      }
      &:active::after {
        content: "active L: ${active.data.luminosity}";
      }
      &:disabled::after,
      &.disabled::after,
      &.inactive::after {
        content: "inactive L: ${inactive.data.luminosity}";
      }
    `
  }
)

Colorway.defaultProps = {
  interactive: true,
}

export const ColorwayWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0;
`

export const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1em;
`

export const DemoColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > * {
    margin-bottom: 1em;
  }
`

export const TextColor = styled.span(...chromaticText.styles)

TextColor.propTypes = {
  ...chromaticText.propTypes(),
}

TextColor.defaultProps = {
  ...chromaticText.defaultProps('', true),
}

export const Background = styled.div(
  ...chromaticSurface.styles,
  () => css`
    padding: 1em;
    border-width: 1em;
    border-style: solid;
  `
)
