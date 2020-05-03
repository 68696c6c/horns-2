import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { Label, Toggle } from '../../atoms'

import * as Styled from './styles'

const ToggleGroup = ({
  options,
  type,
  name,
  id,
  required,
  hasError,
  horizontal,
  className,
  ...others
}) => {
  const [toggleIDs, setToggleIDs] = useState({})
  useEffect(() => {
    const idMap = {}
    options.forEach(option => {
      idMap[option.key] = `${id}-option-${option.key}`
    })
    setToggleIDs(idMap)
  }, [])

  if (!toggleIDs) {
    return <div>Loading</div>
  }

  return (
    <Styled.ToggleGroupFlex
      length={options.length}
      columns={options.length >= 10 ? 10 : options.length}
      horizontal={horizontal}
    >
      {options.map(({ key, value }) => {
        const toggleID = toggleIDs[key]
        return (
          <Styled.ToggleGroupOption>
            <Toggle
              id={toggleID}
              type={type}
              name={name}
              required={required}
              hasError={hasError}
              value={value}
              className={className}
              {...others}
            />
            <Label htmlFor={toggleID} required={required} className={className}>
              {key}
            </Label>
          </Styled.ToggleGroupOption>
        )
      })}
    </Styled.ToggleGroupFlex>
  )
}

ToggleGroup.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    })
  ),
}

ToggleGroup.defaultProps = {
  required: false,
  options: [],
}

export default ToggleGroup
