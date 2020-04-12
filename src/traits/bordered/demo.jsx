/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Story from '_story'
import * as Styled from './demo.styles'

const Demo = () => (
  <>
    <h1>Bordered</h1>
    <p>
      The <em>bordered</em> trait provides border width and style to a
      component. Border color and radius are provided separately by the{' '}
      <em>chromatic</em> and <em>rounded</em> traits, respectively.
    </p>
    <Styled.Box>This box is bordered.</Styled.Box>
    <Story.Grid>
      <Story.Box>
        <Styled.Box borderAll={{ width: 'tiny', style: 'dotted' }}>
          borderAll override
        </Styled.Box>
      </Story.Box>
      <Story.Box>
        <Styled.Box borderX={{ width: 'tiny', style: 'dotted' }}>
          borderX override
        </Styled.Box>
      </Story.Box>
      <Story.Box>
        <Styled.Box borderY={{ width: 'tiny', style: 'dotted' }}>
          borderY override
        </Styled.Box>
      </Story.Box>
    </Story.Grid>
    <Story.Grid>
      <Story.Box>
        <Styled.Box borderTop={{ width: 'tiny', style: 'dotted' }}>
          borderTop override
        </Styled.Box>
      </Story.Box>
      <Story.Box>
        <Styled.Box borderBottom={{ width: 'tiny', style: 'dotted' }}>
          borderBottom override
        </Styled.Box>
      </Story.Box>
      <Story.Box>
        <Styled.Box borderLeft={{ width: 'tiny', style: 'dotted' }}>
          borderLeft override
        </Styled.Box>
      </Story.Box>
      <Story.Box>
        <Styled.Box borderRight={{ style: 'none' }}>
          borderRight override
        </Styled.Box>
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Bordered',
}

export default Demo
