import React from 'react'
import PropTypes from 'prop-types'

import { childrenPropTypes, handleProps, isFragment } from '../../../utils'
import { chromatic, margined, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListItem = ({ icon, font, children, ...others }) => {
  const hasIcon = !isFragment(icon)
  return (
    <Styled.ListItem {...handleProps(others, 'list-item')} font={font} hasIcon={hasIcon}>
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

export const LI = props => <ListItem {...props} />
