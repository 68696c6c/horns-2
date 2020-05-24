import styled from '@emotion/styled'

import { select } from '../_base'

const MultiselectNative = styled.select(...select.styles())

MultiselectNative.propTypes = {
  ...select.propTypes(),
}

MultiselectNative.defaultProps = {
  ...select.defaultProps(),
  multiple: true,
}

export default MultiselectNative
