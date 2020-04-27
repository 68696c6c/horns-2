/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Alert, { messageVariants } from '.'

const Demo = () => (
  <>
    <h1>Alert</h1>
    <p>
      The <em>Alert</em> component provides themed notification text.
    </p>
    {messageVariants.map(variant => (
      <Story.Grid>
        <Story.Box>
          <Alert variant={variant}>{variant} message</Alert>
        </Story.Box>
        <Story.Box>
          <Alert variant={variant} withIcon>
            {variant} message with icon
          </Alert>
        </Story.Box>
        <Story.Box>
          <Alert variant={variant} block>
            {variant} block message
          </Alert>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Alert',
}

export default Demo
