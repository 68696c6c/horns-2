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

const Structure = ({ children, variant, ...others }) => {
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

Structure.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(structuralVariants),
}

Structure.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'div',
}

export default Structure

export const Div = props => <Structure {...props} variant="div" />
export const Section = props => <Structure {...props} variant="section" />
export const Header = props => <Structure {...props} variant="header" />
export const Footer = props => <Structure {...props} variant="footer" />
