import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { link, getLinkVariantProps } from '../_base'

const LinkPhone = ({ children, variant, phone, ...others }) => {
  const { Tag, font, isText } = getLinkVariantProps(variant)
  return (
    <Tag
      {...handleProps(others, 'link-phone')}
      href={`tel:${phone}`}
      font={font}
      typographic={isText}
    >
      {children}
    </Tag>
  )
}

LinkPhone.propTypes = {
  ...link.propTypes(),
  phone: PropTypes.string,
}

LinkPhone.defaultProps = {
  ...link.defaultProps(),
  phone: '',
}

export default LinkPhone
