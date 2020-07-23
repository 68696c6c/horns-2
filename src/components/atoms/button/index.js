import styled from '@emotion/styled'

import { button } from '../../../macros'

const Button = styled.button(...button.styles())

Button.propTypes = {
  ...button.propTypes(),
}

Button.defaultProps = {
  ...button.defaultProps(),
}

export default Button
