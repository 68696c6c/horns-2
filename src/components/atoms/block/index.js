import styled from '@emotion/styled'

import { block } from '../_base'

const Block = styled.div(...block.styles())

Block.propTypes = { ...block.propTypes() }

Block.defaultProps = { ...block.defaultProps() }

export default Block
