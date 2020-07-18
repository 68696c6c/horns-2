import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const overflowValues = [
  null,
  'auto',
  'hidden',
  // 'inherit',
  // 'initial',
  'scroll',
  'visible',
]

const Overflow = styled.div(
  ({ height, x, y }) => css`
    width: 100%;
    height: ${height};
    overflow-x: ${x};
    overflow-y: ${y};
  `
)

Overflow.propTypes = {
  height: PropTypes.string.isRequired,
  x: PropTypes.oneOf([...overflowValues]),
  y: PropTypes.oneOf([...overflowValues]),
}

Overflow.defaultProps = {
  x: null,
  y: null,
}

export default Overflow
