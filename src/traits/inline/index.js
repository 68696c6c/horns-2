import { css } from '@emotion/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/prefer-default-export
export const inline = {
  styles: ({ theme, multiline, multiple, font }) => {
    // Force the element height to match the line-height to ensure that inputs that have controls
    // inside them (e.g. type="datetime-local") don't end up a different size than standard inputs.
    const f = theme.typography.getStyle(font || 'text')
    return multiline || multiple
      ? null
      : css`
          height: ${f.lineHeight};
          min-width: ${f.lineHeight};
        `
  },
  propTypes: () => ({
    multiline: PropTypes.bool,
  }),
  defaultProps: () => ({
    multiline: false,
  }),
}
