import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

import { handleProps } from '../../utils'
import { control } from '../../atoms/_base'
import { Dropdown, DropdownOption, Input } from '../../atoms'

import MenuController from '../menu-controller'
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
  const [values, setValues] = useState([])
  const [options, setOptions] = useState(propsOptions)

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

  return (
    <>
      <Input
        type="hidden"
        id={`select-value-${id}`}
        name={`select_value_${id}`}
        value={values.join(',')}
      />
      <MenuController
        forceWidth
        onOpen={() => {
          if (filterRef.current) {
            filterRef.current.focus()
          }
        }}
        renderControl={(open, ref, toggleOpen) => (
          <Styled.Select
            {...handleProps(others, 'control')}
            multiple={multiple}
            onClick={toggleOpen}
            ref={ref}
            open={open}
          >
            {displayValues.join(', ')}
          </Styled.Select>
        )}
        renderMenu={(open, ref) => (
          <Dropdown open={open} ref={ref}>
            <DropdownOption key={`select-option-${id}-filter`}>
              <Styled.Filter
                type="search"
                id={`select-filter-${id}`}
                name={`select_filter_${id}`}
                onKeyUp={handleFilter}
                ref={filterRef}
              />
            </DropdownOption>
            {options.map(({ key, value }) => (
              <DropdownOption
                value={value}
                key={`select-option-${id}-${key}`}
                onClick={handleChange}
                label={key}
              >
                {key}
              </DropdownOption>
            ))}
          </Dropdown>
        )}
      />
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
  cursor: 'pointer',
  multiple: false,
  options: [],
  filterOptions: defaultFilterOptions,
}

export default Select

export const Multiselect = props => <Select {...props} multiple />
