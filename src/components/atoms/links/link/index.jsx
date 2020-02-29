import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseProps, getVariantProps } from '../utils'

const Link = ({ children, variant, ...others }) => {
  const { Tag, font, isText } = getVariantProps(variant)
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag {...handleProps(others, 'link')} font={font} typographic={isText}>
      {children}
    </Tag>
  )
}

Link.propTypes = {
  ...baseProps.propTypes,
  href: PropTypes.string,
}

Link.defaultProps = {
  ...baseProps.defaultProps,
  href: '#',
}

export default Link
