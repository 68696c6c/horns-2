/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { fontStyles } from '../../config/typography'

import { typographic, typographicBlock } from '.'
import * as Styled from './demo.styles'

const Block = ({ children, align, level: baseLevel }) => {
  let Tag
  let level = baseLevel
  switch (baseLevel) {
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
      Tag = Styled.P
      level = 'paragraph'
  }
  return (
    <Tag level={level} align={align}>
      {children}
    </Tag>
  )
}

Block.propTypes = {
  ...typographicBlock.propTypes(),
}

Block.defaultProps = {
  ...typographicBlock.defaultProps(),
}

const Link = ({ children, ...others }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
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
  // eslint-disable-next-line react/jsx-props-no-spreading
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
    <h1>Typographic Traits</h1>
    <p>
      The typographic traits provide font-styling to a component. The
      typographic trait has two variations: <em>typographic</em>,
      <em>typographicBlock</em>.
    </p>

    <h2>Typographic</h2>
    <p>
      The <em>typographic</em> trait provides font-styling to a component.
    </p>

    {fontStyles.map(styleName => {
      switch (styleName) {
        case 'button':
          return (
            <div>
              <Button>This text uses the {styleName} font style.</Button>
            </div>
          )
        case 'link':
          return (
            <div>
              <Link>This text uses the {styleName} font style.</Link>
            </div>
          )
        default:
          return (
            <div>
              <Styled.Text font={styleName}>
                This text uses the {styleName} font style.
              </Styled.Text>
            </div>
          )
      }
    })}

    <h2>TypographicBlock</h2>
    <p>
      The <em>typographicBlock</em> trait sets font-styling and also sets the
      size of the text and margin based on a <em>level</em> prop.
    </p>

    <Block level="h1">H1 Block</Block>
    <Block level="h2">H2 Block</Block>
    <Block level="h3">H3 Block</Block>
    <Block level="h4">H4 Block</Block>
    <Block level="h5">H5 Block</Block>
    <Block level="h6">H6 Block</Block>
    <Block level="paragraph">Paragraph Block</Block>

    <h2>Alignment</h2>
    <p>
      Both the <em>typographic</em> and <em>typographicBlock</em> traits
      support an <em>align</em> prop that overrides the font-style alignment.
    </p>
    <Block level="h1" align="center">
      This typographicBlock is centered
    </Block>
    <Styled.Text font="text" align="center">
      This typography is centered.
    </Styled.Text>
  </>
)

Demo.story = {
  name: 'Typographic',
}

export default Demo
