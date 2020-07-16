import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { list, listTypes } from '../_base'

const ListOrdered = styled.ol(...list.styles())

ListOrdered.propTypes = {
  ...list.propTypes(),
  type: PropTypes.oneOf([...listTypes.ordered]),
}

ListOrdered.defaultProps = {
  ...list.defaultProps(),
  type: 'l',
}

export default ListOrdered

export const OL = props => <ListOrdered {...props} />
