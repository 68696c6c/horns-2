import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { list, listTypes } from '../_base'

const ListUnordered = styled.ul(...list.styles())

ListUnordered.propTypes = {
  ...list.propTypes(),
  type: PropTypes.oneOf([...listTypes.unordered]),
}

ListUnordered.defaultProps = {
  ...list.defaultProps(),
  type: 'disc',
}

export default ListUnordered

export const UL = props => <ListUnordered {...props} />
