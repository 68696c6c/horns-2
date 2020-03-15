/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const structuralVariants = ['div', 'section', 'header', 'footer']

const Block = ({ children, variant, ...others }) => {
  const props = { ...others }
  let Tag
  switch (variant) {
    case 'section':
      Tag = Styled.Section
      break
    case 'header':
      Tag = Styled.Header
      break
    case 'footer':
      Tag = Styled.Footer
      break
    default:
      Tag = Styled.Div
  }
  return <Tag {...handleProps(props)}>{children}</Tag>
}

Block.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(structuralVariants),
}

Block.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'div',
}

export default Block

export const Div = props => <Block {...props} variant="div" />
export const Section = props => <Block {...props} variant="section" />
export const Header = props => <Block {...props} variant="header" />
export const Footer = props => <Block {...props} variant="footer" />
