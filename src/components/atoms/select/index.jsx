import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { control, StyledSelect, StyledMultiselect } from '../../hadrons'

const Select = ({ multiple, ...others }) => {
  const Tag = multiple ? StyledMultiselect : StyledSelect
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
