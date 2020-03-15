/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { iterateColors } from '_story'
import { flexProperties } from 'config'

import Flex, { Box, FlexColumn, FlexRow } from '.'

const Demo = () => {
  const colorTracker = [-1]
  return (
    <>
      <h1>Flex</h1>
      <p>
        The Flex component arranges uses CSS flex properties to align itself
        and/or its children.
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
      <p>Alias for the default Flex behavior</p>
      <h3>Justify Prop</h3>
      {flexProperties.justify.map((value, index) => (
        <FlexRow
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          justify={value}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexRow>
      ))}
      <h3>Items Prop</h3>
      {flexProperties.items.map((value, index) => (
        <FlexRow
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          items={value}
          style={{ height: '100px' }}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexRow>
      ))}
      <h3>Content Prop</h3>
      <div style={{ width: '300px' }}>
        {flexProperties.content.map((value, index) => (
          <FlexRow
            color={index % 2 === 0 ? 'dark' : 'neutral'}
            marginY="medium"
            content={value}
            style={{ height: '300px' }}
            wrap="wrap"
            fluid
          >
            {iterateColors(16, colorTracker, (c, i) => (
              <Box color={c}>
                {value || 'default'} {i}
              </Box>
            ))}
          </FlexRow>
        ))}
      </div>

      <h2>Column</h2>
      <p>Alias for the default Flex column behavior</p>
      <h3>Justify Prop</h3>
      {flexProperties.justify.map((value, index) => (
        <FlexColumn
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          justify={value}
          style={{ height: '200px' }}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexColumn>
      ))}
      <h3>Items Prop</h3>
      {flexProperties.items.map((value, index) => (
        <FlexColumn
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          items={value}
          style={{ height: '100px' }}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexColumn>
      ))}
      <h3>Content Prop</h3>
      {flexProperties.content.map((value, index) => (
        <FlexColumn
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          content={value}
          style={{ height: '60px' }}
          wrap="wrap"
          fluid
        >
          {iterateColors(16, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexColumn>
      ))}
    </>
  )
}

Demo.story = {
  name: 'Flex',
}

export default Demo
