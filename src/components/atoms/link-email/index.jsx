import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'
import { anchor, getLinkVariantProps } from '../../hadrons'

const getEmailHref = (email, subject, body) => {
  let href = `mailto:${email}?`
  href += subject ? `subject=${subject}&` : ''
  href += body ? `body=${body}` : ''
  return href
}

const LinkEmail = ({ children, variant, email, subject, body, ...others }) => {
  const { Tag, font, isText } = getLinkVariantProps(variant)
  return (
    <Tag
      {...handleProps(others, 'link-email')}
      href={getEmailHref(email, subject, body)}
      font={font}
      typographic={isText}
    >
      {children}
    </Tag>
  )
}

LinkEmail.propTypes = {
  ...anchor.propTypes('link'),
  email: PropTypes.string,
  subject: PropTypes.string,
  body: PropTypes.string,
}

LinkEmail.defaultProps = {
  ...anchor.defaultProps('link'),
  email: '',
  subject: '',
  body: '',
}

export default LinkEmail
