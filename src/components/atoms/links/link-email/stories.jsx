/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { Box, Grid } from '_story'
import { colors } from 'config'

import LinkEmail from '.'

const Demo = () => (
  <>
    <h1>LinkEmail</h1>
    <Grid>
      <Box>
        <LinkEmail email="example@example.com" subject="example" body="example">
          A default email link
        </LinkEmail>
      </Box>
      <Box>
        <LinkEmail
          variant="button"
          email="example@example.com"
          subject="example"
          body="example"
        >
          A default button email link
        </LinkEmail>
      </Box>
    </Grid>
    {colors.map(color => (
      <Grid>
        <Box>
          <LinkEmail
            color={color}
            email="example@example.com"
            subject="example"
            body="example"
          >
            {color} email link
          </LinkEmail>
        </Box>
        <Box>
          <LinkEmail
            variant="button"
            color={color}
            email="example@example.com"
            subject="example"
            body="example"
          >
            {color} button email link
          </LinkEmail>
        </Box>
      </Grid>
    ))}
  </>
)

Demo.story = {
  title: 'LinkEmail',
  name: 'LinkEmail',
}

export default Demo
