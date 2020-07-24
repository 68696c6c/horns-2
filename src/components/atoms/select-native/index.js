import styled from '@emotion/styled'

import { select } from '../../../macros'

const SelectNative = styled.select(...select.styles())

SelectNative.propTypes = {
  ...select.propTypes(),
}

SelectNative.defaultProps = {
  ...select.defaultProps(),
}

export default SelectNative
