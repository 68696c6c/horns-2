/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import LinkTo from '@storybook/addon-links/react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic } from '../traits'

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

export const Box = styled.div(
  chromatic.styles,
  () => css`
    padding: 1em;
  `
)

export const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
`

export const Wrapper = styled.div`
  margin: 1em 0;
`

/**
 * Returns an array of sequential integers starting at 1 of the given length. This is used instead
 * of `const items = new Array(itemCount)` because that returns an array of empty values, which
 * doesn't seem to work in the iterateColors function. Since the resulting array is used to print
 * human-friendly values in a loop, the 0 index is sliced out so that the first item is displayed
 * as item 1.
 */
const makeIntArray = itemCount =>
  [...Array(itemCount + 1).keys()].slice(1, itemCount + 1)

/**
 * Increments and returns the provided index unless it is larger than the provided length, in which
 * case 0 is returned.
 */
const incrementColorIndex = (ci, length) => (ci + 1 >= length ? 0 : ci + 1)

/**
 * Maps over the specified number of iterations, using the provided colorTracker index to cycle
 * through an array of theme colors, passing the current color and index to the provided callback
 * function.
 *
 * Used to cycle through colors while printing components in a Story.
 */
export const iterateColors = (iterations, colorTracker, callback) => {
  const colors = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'info',
    'warning',
    'danger',
  ]
  return makeIntArray(iterations).map(i => {
    // eslint-disable-next-line no-param-reassign
    colorTracker[0] = incrementColorIndex(colorTracker[0], colors.length)
    return callback(colors[colorTracker[0]], i)
  })
}
