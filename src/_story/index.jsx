/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import LinkTo from '@storybook/addon-links/react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const getPath = path => {
  const parts = path.split('/')
  return {
    kind: parts[0],
    story: parts[1] ? parts[1] : 'index',
  }
}

export const A = ({ path, children }) => {
  const { kind, story } = getPath(path)
  return (
    <em>
      <LinkTo kind={kind} story={story}>
        {children}
      </LinkTo>
    </em>
  )
}
A.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const Wrapper = styled.div`
  margin: 1em 0;
`
