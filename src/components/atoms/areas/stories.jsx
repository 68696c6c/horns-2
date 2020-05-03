/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Area from '../area'
import Areas from '.'

const Demo = () => (
  <>
    <h1>Areas</h1>
    <p>
      The <em>Areas</em> component arranges its children according into the
      specified <code>grid-template-areas</code>. It is intended to be used with
      the <em>Area</em> component.
    </p>

    <Areas color="dark" areas="'a b b c' 'a d e f' 'g g g g'" gapped>
      <Area color="success" area="a">
        Area A
      </Area>
      <Area color="info" area="b">
        Area B
      </Area>
      <Area color="warning" area="c">
        Area C
      </Area>
      <Area color="danger" area="d">
        Area D
      </Area>
      <Area color="primary" area="e">
        Area E
      </Area>
      <Area color="secondary" area="f">
        Area F
      </Area>
      <Area color="tertiary" area="g">
        Area G
      </Area>
    </Areas>
  </>
)

Demo.story = {
  name: 'Areas',
}

export default Demo
