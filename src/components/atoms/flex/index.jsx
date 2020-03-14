/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'
import { handleProps } from '../../utils'

import * as Styled from './styles'

export const flexVariants = ['areas', 'columns', 'halves', 'thirds']

const Flex = ({ children, variant, ...others }) => {
  const props = { ...others }
  let Tag
  let className = 'grid'
  switch (variant) {
    case 'halves':
      Tag = Styled.Halves
      className = 'grid-halves'
      break
    case 'thirds':
      Tag = Styled.Thirds
      className = 'grid-thirds'
      break
    case 'areas':
      Tag = Styled.Areas
      className = 'grid-areas'
      break
    case 'columns':
    default:
      Tag = Styled.Columns
      className = 'columns'
  }
  return <Tag {...handleProps(props, className)}>{children}</Tag>
}

Flex.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(flexVariants),
  reversed: PropTypes.bool,
}

Flex.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...gridded.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'columns',
  reversed: false,
}

export default Flex

export const Box = props => <Styled.Box {...props} />
export const Areas = props => <Flex {...props} variant="areas" />
