import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, listTypes } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

const ListUnordered = ({ ...others }) => (
  <Styled.ListUnordered {...handleProps(others, 'list')} />
)

ListUnordered.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  type: PropTypes.oneOf([null, ...Object.keys(listTypes.unordered)]),
}

ListUnordered.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  type: null,
}

export default ListUnordered
