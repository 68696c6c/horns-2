import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseLink, getVariantProps } from '../utils'

const Link = ({ children, variant, ...others }) => {
  const { Tag, font, isText } = getVariantProps(variant)
  return (
    <Tag {...handleProps(others, 'link')} font={font} typographic={isText}>
      {children}
    </Tag>
  )
}

Link.propTypes = {
  ...baseLink.propTypes,
  href: PropTypes.string,
}

Link.defaultProps = {
  ...baseLink.defaultProps,
  href: '#',
}

export default Link
