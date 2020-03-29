import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListOrdered = props => (
  <Styled.ListOrdered
    {...handleProps(props, 'list-ordered')}
    counter={`ol-${uuid()}`}
  />
)

ListOrdered.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  type: PropTypes.oneOf([...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  type: 'l',
}

export default ListOrdered
