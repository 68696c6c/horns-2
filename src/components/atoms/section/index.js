import styled from '@emotion/styled'

import { block } from '../../../macros'

const Section = styled.section(...block.styles())

Section.propTypes = { ...block.propTypes() }

Section.defaultProps = { ...block.defaultProps() }

export default Section
