/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'

import { baseLink, getVariantProps } from '../utils'

const LinkPhone = ({ children, variant, phone, ...others }) => {
  const { Tag, font, isText } = getVariantProps(variant)
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
  ...baseLink.propTypes,
  phone: PropTypes.string,
}

LinkPhone.defaultProps = {
  ...baseLink.defaultProps,
  phone: '',
}

export default LinkPhone
