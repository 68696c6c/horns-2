import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const rounded = {
  styles: ({ theme }) => {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    } = theme.radius.getRadius()
    return css`
      border-top-left-radius: ${topLeft};
      border-top-right-radius: ${topRight};
      border-bottom-left-radius: ${bottomLeft};
      border-bottom-right-radius: ${bottomRight};
    `
  },
  propTypes: () => ({}),
  defaultProps: () => ({}),
}
