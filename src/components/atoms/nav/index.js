import styled from '@emotion/styled'

import { block } from '../../../macros'

const Nav = styled.nav(...block.styles())

Nav.propTypes = { ...block.propTypes() }

Nav.defaultProps = { ...block.defaultProps() }

export default Nav
