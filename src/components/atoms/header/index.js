import styled from '@emotion/styled'

import { block } from '../../../macros'

const Header = styled.header(...block.styles())

Header.propTypes = { ...block.propTypes() }

Header.defaultProps = { ...block.defaultProps() }

export default Header
