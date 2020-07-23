import styled from '@emotion/styled'

import { block } from '../../../macros'

const Footer = styled.footer(...block.styles())

Footer.propTypes = { ...block.propTypes() }

Footer.defaultProps = { ...block.defaultProps() }

export default Footer
