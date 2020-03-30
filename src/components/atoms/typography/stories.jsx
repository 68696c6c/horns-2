/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { Box } from '_story'
import { colors } from 'config'

import Typography, {
  typographicFonts,
  T,
  Label,
  P,
  Pre,
  Heading,
  SubHeading,
} from '.'

const Demo = () => (
  <>
    <h1>Typography</h1>
    <p>
      The <em>Typography</em> component can be used to render any HTML font tag
      and any font style from the theme.
    </p>
    <div>
      <Typography>default typography</Typography>
    </div>
    <h2>Aliases</h2>
    <p>
      The <em>Typography</em> component has several alias components.
    </p>
    <div>
      <T>
        The <em>T</em> component is a one-to-one alias for <em>Typography</em>.
      </T>
    </div>
    <div>
      <Label>
        The <em>Label</em> component is an alias using the <code>label</code>{' '}
        font style.
      </Label>
    </div>
    <div>
      <P>
        The <em>P</em> component is an alias using the <code>paragraph</code>{' '}
        font style.
      </P>
    </div>
    <div>
      <Pre>
        The <em>Pre</em> component is an alias using the <code>pre</code> font
        style.
      </Pre>
    </div>
    <div>
      <Heading>
        The <em>Heading</em> component is an alias using the <code>h1</code>{' '}
        font style.
      </Heading>
    </div>
    <div>
      <SubHeading>
        The <em>SubHeading</em> component is an alias using the <code>h2</code>{' '}
        font style.
      </SubHeading>
    </div>
    <h2>Font Prop</h2>
    <Box>
      {typographicFonts.map(font => (
        <div>
          <Typography font={font}>{font} typography</Typography>
        </div>
      ))}
    </Box>
    <h2>Color Prop</h2>
    <Box>
      {colors.map(color => (
        <div>
          <Typography color={color}>{color} typography</Typography>
        </div>
      ))}
    </Box>
  </>
)

Demo.story = {
  name: 'Typography',
}

export default Demo
