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

export const Box = styled.div`
  padding: 1em;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
`

export const Wrapper = styled.div`
  margin: 1em 0;
`
