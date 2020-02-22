import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { aligned } from '.'

export const TextWrapper = styled.div`
  border: 1px solid black;
  padding: 1em;
  margin-bottom: 1em;
`

export const Alignment = styled.span`
  text-transform: capitalize;
`

export const Text = styled.span(
  ...aligned.styles,
  () =>
    css`
      display: block;
    `
)

Text.propTypes = {
  ...aligned.propTypes(),
}

Text.defaultProps = {
  ...aligned.defaultProps(),
}
