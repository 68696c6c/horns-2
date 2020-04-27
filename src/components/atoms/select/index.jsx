import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { control } from '../_base/controllable'
import * as Styled from './styles'

const Select = ({ multiple, ...others }) => {
  const Tag = multiple ? Styled.Multiselect : Styled.Select
  return <Tag {...handleProps(others, 'control')} multiple={multiple} />
}

Select.propTypes = {
  ...control.propTypes(),
  multiselect: PropTypes.bool,
}

Select.defaultProps = {
  ...control.defaultProps(),
  multiselect: false,
}

export default Select

export const Multiselect = props => <Select {...props} multiple />
