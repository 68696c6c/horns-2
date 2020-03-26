import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { chromatic, typographic } from '../../../../traits'

import * as Styled from '../styles'

const List = ({ ordered, ...others }) => {
  const Tag = ordered ? Styled.ListOrdered : Styled.ListUnordered
  return <Tag ordered={ordered} {...handleProps(others, 'list')} />
}

List.propTypes = {
  ...chromatic.propTypes(),
  ...typographic.propTypes(),
  ordered: PropTypes.bool,
}

List.defaultProps = {
  ...chromatic.defaultProps(null, true),
  ...typographic.defaultProps(),
  ordered: false,
}

export default List

export const ListOrdered = props => <List {...props} ordered />
export const ListUnordered = props => <List {...props} ordered={false} />
