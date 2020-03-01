import { css } from '@emotion/core'

// eslint-disable-next-line import/prefer-default-export
export const bordered = {
  styles: ({ theme }) => {
    const { width, style } = theme.borders.getBorder()
    return css`
      border-width: ${width};
      border-style: ${style};
    `
  },
  propTypes: () => ({}),
  defaultProps: () => ({}),
}
