import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import { listTypes } from '../utils'
import * as Styled from './styles'

const ListOrdered = ({ ordered, ...others }) => (
  <Styled.ListOrdered {...handleProps(others, 'list')} />
)

ListOrdered.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  type: PropTypes.oneOf([null, ...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  type: null,
}

export default ListOrdered
