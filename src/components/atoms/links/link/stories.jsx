/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { Box, Grid } from '_story'
import { colors } from 'config'

import Link from '.'

const Demo = () => (
  <>
    <h1>Link</h1>
    <Grid>
      <Box>
        <Link onClick={e => e.preventDefault()}>A default link</Link>
      </Box>
      <Box>
        <Link variant="button" onClick={e => e.preventDefault()}>
          A default button link
        </Link>
      </Box>
    </Grid>
    {colors.map(color => (
      <Grid>
        <Box>
          <Link color={color} onClick={e => e.preventDefault()}>
            {color} link
          </Link>
        </Box>
        <Box>
          <Link
            variant="button"
            color={color}
            onClick={e => e.preventDefault()}
          >
            {color} button link
          </Link>
        </Box>
      </Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Link',
}

export default Demo
