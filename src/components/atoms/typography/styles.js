import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, interactive, typographic } from '../../../traits'

const baseStyles = [chromatic.styles, typographic.styles]

export const Anchor = styled.a(...baseStyles, interactive.styles)
export const Paragraph = styled.p(...baseStyles)
export const Span = styled.span(...baseStyles)
export const Pre = styled.pre(...baseStyles)
export const Label = styled.label(...baseStyles)

// Phrase components.
export const EM = styled.em(...baseStyles)
export const Strong = styled.strong(...baseStyles)
export const Small = styled.small(...baseStyles)
export const Code = styled.code(...baseStyles)
export const Samp = styled.samp(...baseStyles)
export const KBD = styled.kbd(...baseStyles)
export const Var = styled.var(...baseStyles)
export const Sub = styled.sub(...baseStyles)
export const Sup = styled.sup(...baseStyles)
export const Del = styled.del(...baseStyles)
export const Strikethrough = styled.s(...baseStyles)
export const Mistake = styled.u(...baseStyles, ({ theme }) => {
  const c = theme.color.getColorway('danger')
  return css`
    text-decoration-color: ${c.base.base};
  `
})

// Quote components.
export const Quote = styled.q(...baseStyles)
export const BlockQuote = styled.blockquote(...baseStyles, () => {
  return css`
    border-left: 0.25em solid;
    margin: 1em;
    padding-left: 1em;
  `
})

// Heading components
export const H1 = styled.h1(...baseStyles)
export const H2 = styled.h2(...baseStyles)
export const H3 = styled.h3(...baseStyles)
export const H4 = styled.h4(...baseStyles)
export const H5 = styled.h5(...baseStyles)
export const H6 = styled.h6(...baseStyles)
