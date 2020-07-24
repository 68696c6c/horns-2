import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { link, getLinkVariantProps } from '../../../macros'

const Link = ({ children, variant, ...others }) => {
  const { Tag, font, isText } = getLinkVariantProps(variant)
  return (
    <Tag {...handleProps(others, 'link')} font={font} typographic={isText}>
      {children}
    </Tag>
  )
}

Link.propTypes = {
  ...link.propTypes(),
  href: PropTypes.string,
}

Link.defaultProps = {
  ...link.defaultProps(),
  href: '#',
}

export default Link
