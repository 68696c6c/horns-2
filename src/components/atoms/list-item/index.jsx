import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '../../../config'
import { chromatic, margined, typographic } from '../../../traits'
import { childrenPropTypes, handleProps, isFragment } from '../../utils'

import { listTypes } from '../_base'
import * as Styled from './styles'

const ListItem = ({ icon, font, children, ...others }) => {
  const hasIcon = !isFragment(icon)
  return (
    <Styled.ListItem
      {...handleProps(others, 'list-item')}
      font={font}
      hasIcon={hasIcon}
    >
      {hasIcon && (
        <Styled.ListItemMarker className="list-item-marker" font={font}>
          {icon}
        </Styled.ListItemMarker>
      )}
      {children}
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  ...chromatic.propTypes(),
  ...margined.propTypes(),
  ...typographic.propTypes(),
  icon: childrenPropTypes(),
  type: PropTypes.oneOf([null, ...listTypes.ordered, ...listTypes.unordered]),
  markerColor: PropTypes.oneOf([null, ...colors]),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...margined.defaultProps({ marginY: 'min' }),
  ...typographic.defaultProps(),
  icon: <></>,
  type: null,
  markerColor: null,
}

export default ListItem

export const LI = props => <ListItem {...props} />
