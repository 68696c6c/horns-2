import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

import { handleProps } from '../../utils'
import { control } from '../../atoms/_base'
import { Input, SelectNative, MultiselectNative } from '../../atoms'

import * as Styled from './styles'

export const filterOptions = _debounce(() => {
  console.log('filter options')
}, 100)

// const BaseSelect = React.forwardRef((props, ref) => (
//   <SelectNative ref={ref} {...props} />
// ))

const Select = ({
  children,
  id,
  multiple,
  options: propsOptions,
  ...others
}) => {
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])
  const [options, setOptions] = useState(propsOptions)

  const selectRef = useRef(null)
  const filterRef = useRef(null)

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.focus()
    }
  }, [open])

  const handleClick = useCallback(event => {
    if (selectRef.current !== event.target) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <>
      <Input
        type="hidden"
        id={`select-value-${id}`}
        name={`select_value_${id}`}
      />
      <div>
        <Styled.Select
          {...handleProps(others, 'control')}
          multiple={multiple}
          onClick={toggleOpen}
          ref={selectRef}
        >
          {text}
        </Styled.Select>
        <Styled.Dropdown open={open}>
          <Input
            type="search"
            id={`select-filter-${id}`}
            name={`select_filter_${id}`}
            onKeyUp={filterOptions}
            ref={filterRef}
          />
          {options.map(({ key, value }) => (
            <Styled.Option value={value} key={`select-option-${id}-${key}`}>
              {key}
            </Styled.Option>
          ))}
        </Styled.Dropdown>
      </div>
    </>
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
