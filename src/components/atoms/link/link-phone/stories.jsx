/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { Box, Grid } from '_story'
import { colors } from 'config'

import LinkPhone from '.'

const Demo = () => (
  <>
    <h1>LinkPhone</h1>
    <Grid>
      <Box>
        <LinkPhone phone="123-456-7890">A default phone link</LinkPhone>
      </Box>
      <Box>
        <LinkPhone variant="button" phone="123-456-7890">
          A default button phone link
        </LinkPhone>
      </Box>
    </Grid>
    {colors.map(color => (
      <Grid>
        <Box>
          <LinkPhone color={color} phone="123-456-7890">
            {color} phone link
          </LinkPhone>
        </Box>
        <Box>
          <LinkPhone variant="button" color={color} phone="123-456-7890">
            {color} button phone link
          </LinkPhone>
        </Box>
      </Grid>
    ))}
  </>
)

Demo.story = {
  title: 'LinkPhone',
  name: 'LinkPhone',
}

export default Demo
