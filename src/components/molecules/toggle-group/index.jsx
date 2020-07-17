import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps } from '../../utils'
import { toggleTypes, Toggle } from '../../atoms'

import * as Styled from './styles'

const ToggleGroup = ({
  options,
  type,
  name,
  id,
  required,
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

  return (
    <Styled.ToggleGroup
      {...handleProps(others, 'toggle-group')}
      length={options.length}
    >
      {options.map(({ key, value }) => {
        const toggleID = toggleIDs[key] || uuid()
        return (
          <Styled.ToggleGroupOption key={toggleID}>
            <Toggle
              id={toggleID}
              type={type}
              name={name}
              required={required}
              value={value}
              className={className}
              {...others}
            />
            <Styled.Label
              htmlFor={toggleID}
              required={required}
              className={[className, 'toggle-group-label'].join(' ').trim()}
            >
              {key}
            </Styled.Label>
          </Styled.ToggleGroupOption>
        )
      })}
    </Styled.ToggleGroup>
  )
}

ToggleGroup.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(toggleTypes).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
}

ToggleGroup.defaultProps = {
  className: '',
  required: false,
  options: [],
}

export default ToggleGroup
