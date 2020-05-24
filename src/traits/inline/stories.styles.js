import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { inline } from '.'
import { typographic } from '../typographic'

export const Wrapper = styled.p(
  () =>
    css`
      background: orange;
    `
)

const inputStyles = () => css`
  border: 1px solid black;
  padding: 0.25em;
  margin: 0;
  display: inline-flex;
  box-sizing: content-box;
  vertical-align: middle;
`

export const Input = styled.input(
  typographic.styles,
  inline.styles,
  inputStyles
)

Input.propTypes = {
  ...inline.propTypes(),
  ...typographic.propTypes(),
}

Input.defaultProps = {
  ...inline.defaultProps(),
  ...typographic.defaultProps(),
}

export const UncontrolledInput = styled.input(typographic.styles, inputStyles)

UncontrolledInput.propTypes = {
  ...typographic.propTypes(),
}

UncontrolledInput.defaultProps = {
  ...typographic.defaultProps(),
}
