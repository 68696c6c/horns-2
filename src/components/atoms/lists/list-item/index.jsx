import React from 'react'
import PropTypes from 'prop-types'

import {
  childrenPropTypes,
  handleProps,
  isFragment,
} from '../../../utils'
import { chromatic, margined, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListItem = ({ color, icon, type, value, children, ...others }) => {
  console.log('list item value', value)
  return (
    <Styled.ListItem value={value} {...handleProps(others, 'list-item')}>
      <Styled.ListItemMarker
        color={color}
        type={type}
        value={value}
        className={`marker ${!isFragment(icon) && 'icon'}`}
      >
        {icon}
      </Styled.ListItemMarker>
      {children}
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes(),
  type: PropTypes.oneOf([
    null,
    listTypes.unordered,
    ...listTypes.ordered,
  ]),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps(null, null, 'xxSmall'),
  ...typographic.defaultProps(),
  icon: <></>,
  type: null,
}

export default ListItem
