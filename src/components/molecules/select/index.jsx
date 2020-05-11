import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

import { handleProps } from '../../utils'
import { control } from '../../atoms/_base'
import { Input } from '../../atoms'

import * as Styled from './styles'

export const defaultFilterOptions = (value, options, callback) =>
  callback(
    value === ''
      ? options
      : options.filter(option =>
          option.key.toLowerCase().includes(value.toLowerCase())
        )
  )

const Select = ({
  children,
  id,
  multiple,
  options: propsOptions,
  filterOptions,
  ...others
}) => {
  const [displayValues, setDisplayValues] = useState([])
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])
  const [options, setOptions] = useState(propsOptions)

  const selectRef = useRef(null)
  const filterRef = useRef(null)

  const filterOptionsD = _debounce(filterOptions, 100, { leading: true })

  const handleFilter = () =>
    filterOptionsD(
      filterRef.current && filterRef.current.value,
      options,
      result => setOptions(result)
    )

  const handleChange = event => {
    const value = event.target.getAttribute('value')
    const displayValue = event.target.getAttribute('label')

    if (multiple) {
      // If the value is already selected, unselect it.
      if (values.includes(value)) {
        const finalValues = values.filter(v => v !== value)
        setValues(finalValues)

        const finalDisplayValues = displayValues.filter(
          dv => dv !== displayValue
        )
        setDisplayValues(finalDisplayValues)
      } else {
        setValues([...values, value])
        setDisplayValues([...displayValues, displayValue])
      }
    } else {
      setValues([value])
      setDisplayValues([displayValue])
    }
  }

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
        value={values.join(',')}
      />
      <div>
        <Styled.Select
          {...handleProps(others, 'control')}
          multiple={multiple}
          onClick={toggleOpen}
          ref={selectRef}
        >
          {displayValues.join(',')}
        </Styled.Select>
        <Styled.Dropdown open={open}>
          <Input
            type="search"
            id={`select-filter-${id}`}
            name={`select_filter_${id}`}
            onKeyUp={handleFilter}
            ref={filterRef}
          />
          {options.map(({ key, value }) => (
            <Styled.Option
              value={value}
              key={`select-option-${id}-${key}`}
              onClick={handleChange}
              label={key}
            >
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
  filterOptions: PropTypes.func,
}

Select.defaultProps = {
  ...control.defaultProps(),
  multiple: false,
  options: [],
  filterOptions: defaultFilterOptions,
}

export default Select

export const Multiselect = props => <Select {...props} multiple />
