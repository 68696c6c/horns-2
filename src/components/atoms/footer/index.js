import styled from '@emotion/styled'

import { block } from '../_base'

const Footer = styled.footer(...block.styles())

Footer.propTypes = { ...block.propTypes() }

Footer.defaultProps = { ...block.defaultProps() }

export default Footer
