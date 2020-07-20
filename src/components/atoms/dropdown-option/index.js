import styled from '@emotion/styled'

import { chromaticSurface, interactive, padded } from '../../../traits'

import { controllableDefaultProps } from '../_base'

const DropdownOption = styled.li(
  chromaticSurface.styles,
  padded.styles,
  ({ onClick, ...others }) => onClick && interactive.styles(others)
)

DropdownOption.propTypes = {
  ...chromaticSurface.propTypes(),
  ...interactive.propTypes(),
  ...padded.propTypes(),
}

DropdownOption.defaultProps = {
  ...chromaticSurface.defaultProps(),
  ...interactive.defaultProps(false, false, 'pointer'),
  ...padded.defaultProps(),
  paddingConfig: controllableDefaultProps.paddingConfig,
}

export default DropdownOption
