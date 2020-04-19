/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import * as Story from '_story'
import { colors } from 'config'

import LinkEmail from '.'

const Demo = () => (
  <>
    <h1>LinkEmail</h1>
    <Story.Grid>
      <Story.Box>
        <LinkEmail email="example@example.com" subject="example" body="example">
          A default email link
        </LinkEmail>
      </Story.Box>
      <Story.Box>
        <LinkEmail
          variant="button"
          email="example@example.com"
          subject="example"
          body="example"
        >
          A default button email link
        </LinkEmail>
      </Story.Box>
    </Story.Grid>
    {colors.map(color => (
      <Story.Grid>
        <Story.Box>
          <LinkEmail
            color={color}
            email="example@example.com"
            subject="example"
            body="example"
          >
            {color} email link
          </LinkEmail>
        </Story.Box>
        <Story.Box>
          <LinkEmail
            variant="button"
            color={color}
            email="example@example.com"
            subject="example"
            body="example"
          >
            {color} button email link
          </LinkEmail>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  title: 'LinkEmail',
  name: 'LinkEmail',
}

export default Demo
