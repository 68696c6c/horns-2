import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { list, listTypes } from '../_base'
import * as Styled from './styles'

const ListUnordered = props => (
  <Styled.ListOrdered {...handleProps(props, 'list-unordered')} />
)

ListUnordered.propTypes = {
  ...list.propTypes(),
  type: PropTypes.oneOf([...listTypes.unordered]),
}

ListUnordered.defaultProps = {
  ...list.defaultProps(),
  type: 'disc',
}

export default ListUnordered

export const UL = props => <ListUnordered {...props} />
