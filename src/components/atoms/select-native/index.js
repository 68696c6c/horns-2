import styled from '@emotion/styled'

import { select } from '../_base'

const SelectNative = styled.select(...select.styles())

SelectNative.propTypes = {
  ...select.propTypes(),
}

SelectNative.defaultProps = {
  ...select.defaultProps(),
}

export default SelectNative
