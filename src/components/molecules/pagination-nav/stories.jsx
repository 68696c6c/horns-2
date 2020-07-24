/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import PaginationNav from '.'

const Demo = () => (
  <>
    <h1>PaginationNav</h1>
    <p>
      The <em>PaginationNav</em> component provides a fully themed and functional
      pagination menu.
    </p>
    <PaginationNav pages={10} currentPage={3} />
  </>
)

Demo.story = {
  name: 'PaginationNav',
}

export default Demo
