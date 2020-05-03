import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { control } from '../_base/controllable'
import * as Styled from './styles'

const Select = ({ children, id, multiple, options, ...others }) => {
  const Tag = multiple ? Styled.Multiselect : Styled.Select
  return (
    <Tag {...handleProps(others, 'control')} multiple={multiple}>
      {children ||
        options.map(({ key, value }) => (
          <option value={value} key={`select-option-${id}-${key}`}>
            {key}
          </option>
        ))}
    </Tag>
  )
}

Select.propTypes = {
  ...control.propTypes(),
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
}

Select.defaultProps = {
  ...control.defaultProps(),
  multiple: false,
  options: [],
}

export default Select

export const Multiselect = props => <Select {...props} multiple />
