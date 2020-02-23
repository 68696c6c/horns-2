import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { interactive } from '.'
import { chromatic } from '../chromatic'
import { typographic } from '../typographic'

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 1em;
  margin-bottom: 1em;
`

export const Box = styled.div(
  ...interactive.styles,
  ...chromatic.styles,
  ...typographic.styles,
  () => css`
    padding: 1em;
  `
)
Box.propTypes = {
  ...interactive.propTypes(),
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
}
Box.defaultProps = {
  ...interactive.defaultProps(),
  ...chromatic.defaultProps(),
  ...typographic.defaultProps(),
}

export const Text = styled.span(
  ...interactive.styles,
  ...typographic.styles,
  () => css`
    padding: 1em;
  `
)
Text.propTypes = {
  ...interactive.propTypes(),
  ...typographic.propTypes(),
}
Text.defaultProps = {
  ...interactive.defaultProps(),
  ...typographic.defaultProps('link'),
}
