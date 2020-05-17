import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { control } from '../_base'
import * as Styled from './styles'

const SelectNative = ({ children, id, multiple, options, ...others }) => {
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

SelectNative.propTypes = {
  ...control.propTypes(),
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
}

SelectNative.defaultProps = {
  ...control.defaultProps(),
  multiple: false,
  options: [],
}

export default SelectNative

export const MultiselectNative = props => <SelectNative {...props} multiple />
