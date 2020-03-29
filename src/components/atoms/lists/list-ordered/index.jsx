import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListOrdered = ({ ordered, ...others }) => {
  const [counter, setCounter] = useState('ol')
  useEffect(() => {
    const c = uuid()
    console.log('use effect', c)
    setCounter(c)
  }, [])
  return (
    <Styled.ListOrdered {...handleProps(others, 'list')} counter={counter} />
  )
}

ListOrdered.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  type: PropTypes.oneOf([null, ...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  type: 'decimal',
}

export default ListOrdered
