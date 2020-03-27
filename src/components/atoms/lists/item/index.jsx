import React from 'react'

import { childrenPropTypes, handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

const ListItem = ({ icon, children, ...others }) => {
  const i = icon ? (
    <Styled.ListItemIcon {...handleProps(others, 'icon')}>
      {icon}
    </Styled.ListItemIcon>
  ) : (
    <Styled.ListItemIcon {...handleProps(others, 'icon bullet')} bullet />
  )
  return (
    <Styled.ListItem {...handleProps(others, 'list-item')}>
      {i}
      {children}
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes().isRequired,
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  icon: null,
}

export default ListItem
