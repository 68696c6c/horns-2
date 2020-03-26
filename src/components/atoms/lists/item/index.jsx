import React from 'react'
import PropTypes from 'prop-types'

import { childrenPropTypes, handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

const ListItem = ({ icon, children, ...others }) => (
  <Styled.ListItem {...handleProps(others, 'list-item')}>
    {icon}
    {children}
  </Styled.ListItem>
)

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes().isRequired,
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  icon: <></>,
}

export default ListItem
