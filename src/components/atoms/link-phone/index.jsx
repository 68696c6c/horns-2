import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { anchor, getLinkVariantProps } from '../../hadrons'

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
  ...anchor.propTypes('link'),
  phone: PropTypes.string,
}

LinkPhone.defaultProps = {
  ...anchor.defaultProps('link'),
  phone: '',
}

export default LinkPhone
