import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

// TODO shouldn't need to force 'typographic' prop on the list item.
const ListItem = ({ icon, children, ...others }) => (
  <Styled.ListItem {...handleProps(others, 'list-item')} typographic>
    {icon}
    {children}
  </Styled.ListItem>
)

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

ListItem.defaultPropts = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  icon: <span>*</span>,
}

export default ListItem
