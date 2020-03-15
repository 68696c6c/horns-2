/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import Flex, { Box, FlexColumn, FlexRow, } from '.'

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Flex</h1>
    <p>
      The Flex component arranges uses CSS flex properties to align itself and/or its children.
    </p>
    <Flex color="dark" marginY="medium">
      <Box color="primary">Box 1</Box>
      <Box color="secondary">Box 2</Box>
      <Box color="tertiary">Box 3</Box>
    </Flex>
    <Flex color="dark" marginY="medium" fluid>
      <Box color="success">Box 1</Box>
      <Box color="info">Box 2</Box>
      <Box color="warning">Box 3</Box>
      <Box color="danger">Box 4</Box>
    </Flex>

    <h2>Row</h2>
    <FlexRow color="dark" marginY="medium">
      <Box color="primary">Box 1</Box>
      <Box color="secondary">Box 2</Box>
      <Box color="tertiary">Box 3</Box>
    </FlexRow>
    <FlexRow color="neutral" marginY="medium" justify="left">
      <Box color="success">Box 1</Box>
      <Box color="info">Box 2</Box>
      <Box color="warning">Box 3</Box>
    </FlexRow>
    <FlexRow color="dark" marginY="medium" justify="center">
      <Box color="danger">Box 1</Box>
      <Box color="primary">Box 2</Box>
      <Box color="secondary">Box 3</Box>
    </FlexRow>
    <FlexRow color="neutral" marginY="medium" justify="right">
      <Box color="tertiary">Box 1</Box>
      <Box color="success">Box 2</Box>
      <Box color="info">Box 3</Box>
    </FlexRow>
    <FlexRow color="dark" marginY="medium" justify="around">
      <Box color="warning">Box 1</Box>
      <Box color="danger">Box 2</Box>
      <Box color="primary">Box 3</Box>
    </FlexRow>
    <FlexRow color="neutral" marginY="medium" justify="between">
      <Box color="secondary">Box 1</Box>
      <Box color="tertiary">Box 2</Box>
      <Box color="success">Box 3</Box>
    </FlexRow>
    <FlexRow color="dark" marginY="medium" justify="evenly">
      <Box color="info">Box 1</Box>
      <Box color="warning">Box 2</Box>
      <Box color="danger">Box 3</Box>
    </FlexRow>

    <h2>Column</h2>
    <FlexColumn color="dark" marginY="medium">
      <Box color="primary">Box 1</Box>
      <Box color="secondary">Box 2</Box>
      <Box color="tertiary">Box 3</Box>
    </FlexColumn>
    <FlexColumn color="dark" marginY="medium" fluid>
      <Box color="success">Box 1</Box>
      <Box color="info">Box 2</Box>
      <Box color="warning">Box 3</Box>
      <Box color="danger">Box 4</Box>
    </FlexColumn>
  </>
)

Demo.story = {
  name: 'Flex',
}

export default Demo
