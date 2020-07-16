import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { select } from '../_base'

const SelectNative = styled.select(
  ...select.styles(),
  ({ theme, multiple, font }) => {
    if (multiple) {
      const f = theme.typography.getStyle(font || 'text')
      return css`
        min-height: ${f.lineHeight};
      `
    }
    return null
  }
)

SelectNative.propTypes = {
  ...select.propTypes(),
}

SelectNative.defaultProps = {
  ...select.defaultProps(),
}

export default SelectNative
