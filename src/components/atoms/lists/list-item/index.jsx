import React from 'react'
import PropTypes from 'prop-types'

import { childrenPropTypes, handleProps, isFragment } from '../../../utils'
import { chromatic, margined, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListItem = ({ color, icon, type, value, children, ...others }) => {
  const hasIcon = !isFragment(icon)
  let iconContent
  if (hasIcon) {
    iconContent = (
      <Styled.ListItemMarker
        type={type}
        value={value}
        className="icon"
      >
        {icon}
      </Styled.ListItemMarker>
    )
  }
  return (
    <Styled.ListItem
      color={color}
      type={type}
      value={value}
      {...handleProps(others, 'list-item')}
      hasIcon={hasIcon}
    >
      {iconContent}
      <Styled.ListItemText color={color} className="item-text">{children}</Styled.ListItemText>
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes(),
  type: PropTypes.oneOf([null, listTypes.unordered, ...listTypes.ordered]),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps(null, null, 'xxSmall'),
  ...typographic.defaultProps(),
  icon: <></>,
  type: null,
}

export default ListItem
