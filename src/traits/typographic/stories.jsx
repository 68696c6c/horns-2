/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { fontStyles } from '../../config'

import { typographic } from '.'
import * as Styled from './stories.styles'

const Heading = ({ children, font }) => {
  let Tag
  switch (font) {
    case 'h1':
      Tag = Styled.H1
      break
    case 'h2':
      Tag = Styled.H2
      break
    case 'h3':
      Tag = Styled.H3
      break
    case 'h4':
      Tag = Styled.H4
      break
    case 'h5':
      Tag = Styled.H5
      break
    case 'h6':
      Tag = Styled.H6
      break
    default:
      Tag = Styled.H1
      break
  }
  return <Tag>{children}</Tag>
}

Heading.propTypes = {
  ...typographic.propTypes(),
}

Heading.defaultProps = {
  ...typographic.defaultProps(),
}

const Link = ({ children, ...others }) => (
  <Styled.A href="#" {...others}>
    {children}
  </Styled.A>
)

Link.propTypes = {
  ...typographic.propTypes(),
}

Link.defaultProps = {
  ...typographic.defaultProps('link', '', true),
}

const Button = ({ children, ...others }) => (
  <Styled.Button {...others}>{children}</Styled.Button>
)

Button.propTypes = {
  ...typographic.propTypes(),
}

Button.defaultProps = {
  ...typographic.defaultProps('button', '', true),
}

const Demo = () => (
  <>
    <h1>Typographic</h1>
    <p>
      The <em>typographic</em> trait provides font-styling to a component.
    </p>

    {fontStyles.map(styleName => {
      switch (styleName) {
        case 'button':
          return (
            <div key={styleName}>
              <Button>This text uses the {styleName} font style.</Button>
            </div>
          )
        case 'link':
          return (
            <div key={styleName}>
              <Link>This text uses the {styleName} font style.</Link>
            </div>
          )
        default:
          return (
            <div key={styleName}>
              <Styled.Text font={styleName}>
                This text uses the {styleName} font style.
              </Styled.Text>
            </div>
          )
      }
    })}
  </>
)

Demo.story = {
  name: 'Typographic',
}

export default Demo
