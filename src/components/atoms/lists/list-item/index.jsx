import React from 'react'
import PropTypes from 'prop-types'

import {
  childrenPropTypes,
  handleProps,
  isFragment,
  listTypes,
} from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

const ListItem = ({ color, icon, children, ...others }) => {
  return (
    <Styled.ListItem {...handleProps(others, 'list-item')}>
      <Styled.ListItemIcon
        color={color}
        className={`icon ${isFragment(icon) && 'bullet'}`}
      >
        {icon}
      </Styled.ListItemIcon>
      {children}
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes().isRequired,
  type: PropTypes.oneOf([
    null,
    ...Object.keys(listTypes.unordered),
    ...listTypes.ordered,
  ]),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  icon: <></>,
  type: null,
}

export default ListItem
