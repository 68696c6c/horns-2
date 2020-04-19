import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { anchor, getLinkVariantProps } from '../../hadrons'

const Link = ({ children, variant, ...others }) => {
  const { Tag, font, isText } = getLinkVariantProps(variant)
  return (
    <Tag {...handleProps(others, 'link')} font={font} typographic={isText}>
      {children}
    </Tag>
  )
}

Link.propTypes = {
  ...anchor.propTypes('link'),
  href: PropTypes.string,
}

Link.defaultProps = {
  ...anchor.defaultProps('link'),
  href: '#',
}

export default Link
