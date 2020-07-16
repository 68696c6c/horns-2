import styled from '@emotion/styled'

import { control } from '../_base'

const Textarea = styled.textarea(...control.styles())

Textarea.propTypes = {
  ...control.propTypes(),
}

Textarea.defaultProps = {
  ...control.defaultProps(),
  multiline: true,
}

export default Textarea
