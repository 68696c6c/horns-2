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

const ListItem = ({ color, icon, type, children, ...others }) => {
  return (
    <Styled.ListItem {...handleProps(others, 'list-item')}>
      <Styled.ListItemMarker
        color={color}
        type={type}
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
  icon: childrenPropTypes().isRequired,
  type: PropTypes.oneOf([
    null,
    ...Object.keys(listTypes.unordered),
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
