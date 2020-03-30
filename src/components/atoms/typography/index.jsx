import React from 'react'
import PropTypes from 'prop-types'

import { fontStyles } from '../../../config'
import { chromatic, interactive, typographic } from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

// @TODO add support for HTML u tag https://www.w3schools.com/tags/tag_u.asp
export const typographicFonts = [
  ...fontStyles,
  'blockquote',
  'samp',
  'kbd',
  'pre',
  'sub',
  'sup',
  'del',
  's',
]

const Typography = ({ children, font: passedFont, ...others }) => {
  const props = { ...others }
  let className = passedFont
  let Tag
  let font = passedFont
  switch (passedFont) {
    case 'h1':
      Tag = Styled.H1
      break
    case 'h2':
      Tag = Styled.H2
      break
    case 'h3':
      Tag = Styled.H3
      break
    case 'h4':
      Tag = Styled.H4
      break
    case 'h5':
      Tag = Styled.H5
      break
    case 'h6':
      Tag = Styled.H6
      break
    case 'paragraph':
      Tag = Styled.Paragraph
      break
    case 'quote':
      Tag = Styled.Quote
      break
    case 'label':
      Tag = Styled.Label
      break
    case 'link':
      Tag = Styled.Anchor
      props.href = props.href ? props.href : '#'
      props.inactive = false
      break
    case 'message':
      Tag = Styled.Span
      break
    case 'caption':
      Tag = Styled.Span
      break
    case 'legal':
      Tag = Styled.Small
      break
    case 'code':
      Tag = Styled.Code
      break
    case 'emphasized':
      Tag = Styled.EM
      break
    case 'strong':
      Tag = Styled.Strong
      break
    case 'variable':
      Tag = Styled.Var
      break
    case 'blockquote':
      Tag = Styled.BlockQuote
      font = 'quote'
      break
    case 'samp':
      Tag = Styled.Samp
      font = 'text'
      break
    case 'kbd':
      Tag = Styled.KBD
      font = 'code'
      break
    case 'pre':
      Tag = Styled.Pre
      font = 'code'
      break
    case 'sub':
      Tag = Styled.Sub
      font = 'text'
      break
    case 'sup':
      Tag = Styled.Sup
      font = 'text'
      break
    case 'del':
      Tag = Styled.Del
      font = 'text'
      break
    case 's':
      Tag = Styled.Strikethrough
      font = 'text'
      break
    default:
      Tag = Styled.Span
      font = 'text'
      className = 'text'
  }
  return (
    <Tag {...handleProps(props, className)} font={font}>
      {children}
    </Tag>
  )
}

Typography.propTypes = {
  ...chromatic.propTypes(),
  ...interactive.propTypes(),
  ...typographic.propTypes(),
  font: PropTypes.oneOf(typographicFonts),
}

Typography.defaultProps = {
  ...chromatic.defaultProps('background'),
  ...interactive.defaultProps(),
  ...typographic.defaultProps(),
  typographic: true,
}

export default Typography

export const T = props => <Typography {...props} />
export const P = props => <Typography {...props} font="paragraph" />
export const Pre = props => <Typography {...props} font="pre" />
export const Heading = props => <Typography {...props} font="h1" />
export const SubHeading = props => <Typography {...props} font="h2" />
