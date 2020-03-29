import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseList, listTypes } from '../utils'
import * as Styled from './styles'

const ListUnordered = ({ ...others }) => (
  <Styled.ListUnordered {...handleProps(others, 'list-unordered')} />
)

ListUnordered.propTypes = {
  ...baseList.propTypes(),
  type: PropTypes.oneOf([...listTypes.unordered]),
}

ListUnordered.defaultProps = {
  ...baseList.defaultProps(),
  type: 'disc',
}

export default ListUnordered
