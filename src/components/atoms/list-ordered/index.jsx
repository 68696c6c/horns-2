import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { list, listTypes } from '../_base'
import * as Styled from './styles'

const ListOrdered = props => (
  <Styled.ListOrdered {...handleProps(props, 'list-ordered')} />
)

ListOrdered.propTypes = {
  ...list.propTypes(),
  type: PropTypes.oneOf([...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...list.defaultProps(),
  type: 'l',
}

export default ListOrdered

export const OL = props => <ListOrdered {...props} />
