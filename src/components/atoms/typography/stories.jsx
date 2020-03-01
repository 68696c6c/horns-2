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
      The Typography component can be used to render any HTML font tag and any
      font style from the theme.
    </p>
    <div>
      <Typography>default typography</Typography>
    </div>
    <h2>Aliases</h2>
    <p>The Typography component has several alias components.</p>
    <div>
      <T>The T component is a one-to-one alias for Typography.</T>
    </div>
    <div>
      <Label>
        The Label component is an alias using the <em>label</em> font style.
      </Label>
    </div>
    <div>
      <P>
        The P component is an alias using the <em>paragraph</em> font style.
      </P>
    </div>
    <div>
      <Pre>
        The Pre component is an alias using the <em>pre</em> font style.
      </Pre>
    </div>
    <div>
      <Heading>
        The Heading component is an alias using the <em>h1</em> font style.
      </Heading>
    </div>
    <div>
      <SubHeading>
        The SubHeading component is an alias using the <em>h2</em> font style.
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
