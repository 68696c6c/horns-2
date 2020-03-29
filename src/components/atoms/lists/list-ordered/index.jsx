import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { listTypes, baseList } from '../utils'
import * as Styled from './styles'

const ListOrdered = props => (
  <Styled.ListOrdered {...handleProps(props, 'list-ordered')} />
)

ListOrdered.propTypes = {
  ...baseList.propTypes(),
  type: PropTypes.oneOf([...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...baseList.defaultProps(),
  type: 'l',
}

export default ListOrdered
