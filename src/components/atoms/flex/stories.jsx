/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { Box } from '_story'

import { FlexColumn, FlexRow } from '.'

const Demo = () => (
  <>
    <h1>Flex</h1>
    <p>
      There are two types of Flex components: <em>FlexRow</em> and
      <em>FlexColumn</em>
    </p>

    <h2>FlexRow</h2>
    <p>
      The <em>FlexRow</em> component arranges uses CSS flex properties to
      arrange its children horizontally.
    </p>
    <FlexRow color="dark" marginY="medium" style={{ height: '200px' }}>
      <Box color="primary">Box 1</Box>
      <Box color="secondary">Box 2</Box>
      <Box color="tertiary">Box 3</Box>
    </FlexRow>

    <h2>FlexColumn</h2>
    <p>
      The <em>FlexColumn</em> component arranges uses CSS flex properties to
      arrange its children vertically.
    </p>
    <FlexColumn color="dark" marginY="medium" style={{ height: '400px' }}>
      <Box color="primary">Box 1</Box>
      <Box color="secondary">Box 2</Box>
      <Box color="tertiary">Box 3</Box>
    </FlexColumn>
  </>
)

Demo.story = {
  name: 'Flex',
}

export default Demo
