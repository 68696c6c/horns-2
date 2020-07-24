/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import { messageVariants } from '../../../macros'
import Message from '.'

const Demo = () => (
  <>
    <h1>Message</h1>
    <p>
      The <em>Message</em> component provides themed notification text.
    </p>
    {messageVariants.map(variant => (
      <Story.Grid>
        <Story.Box>
          <Message variant={variant}>{variant} message</Message>
        </Story.Box>
      </Story.Grid>
    ))}
  </>
)

Demo.story = {
  name: 'Message',
}

export default Demo
