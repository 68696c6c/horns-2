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

export const gridVariants = ['areas', 'halves', 'thirds']

const Template = ({ children, variant, ...others }) => {
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
    default:
      Tag = Styled.Areas
      className = 'grid-areas'
  }
  return <Tag {...handleProps(props, className)}>{children}</Tag>
}

Template.propTypes = {
  ...chromatic.propTypes(),
  ...contained.propTypes(),
  ...gridded.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...responsive.propTypes(),
  variant: PropTypes.oneOf(gridVariants),
  smallSide: PropTypes.oneOf(['left', 'right']),
}

Template.defaultProps = {
  ...chromatic.defaultProps(),
  ...contained.defaultProps(),
  ...gridded.defaultProps(),
  ...margined.defaultProps(),
  ...padded.defaultProps(),
  ...responsive.defaultProps(),
  variant: 'areas',
  smallSide: 'left',
}

export default Template

export const Area = props => <Styled.Area {...props} />
export const Areas = props => <Template {...props} variant="areas" />
export const Halves = props => <Template {...props} variant="halves" />
export const Thirds = props => <Template {...props} variant="thirds" />
