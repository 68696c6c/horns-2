/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import { messageVariants } from '../../../macros'
import Alert from '.'

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
          <Alert variant={variant} withIcon>
            {variant} message with icon
          </Alert>
          <Alert variant={variant} block>
            {variant} block message
          </Alert>
          <Alert variant={variant} block withIcon>
            {variant} block message with icon
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
