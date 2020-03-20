/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseControl } from '../utils'
import * as Styled from '../styles'

const Select = ({ multiple, ...others }) => {
  const Tag = multiple ? Styled.Multiselect : Styled.Select
  return <Tag {...handleProps(others, 'control')} multiple={multiple} />
}

Select.propTypes = {
  ...baseControl.propTypes(),
  multiselect: PropTypes.bool,
}

Select.defaultProps = {
  ...baseControl.defaultProps(),
  multiselect: false,
}

export default Select

export const Multiselect = props => <Select {...props} multiple />
