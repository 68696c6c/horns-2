/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { iterateColors } from '_story'
import { flexProperties } from 'config'

import FlexColumn from '.'
import { Box } from '..'

const Demo = () => {
  const colorTracker = [-1]
  return (
    <>
      <h1>FlexColumn</h1>
      <p>
        The FlexColumn component arranges uses CSS flex properties to align
        itself and/or its children.
      </p>
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

      <h2>X Prop</h2>
      {flexProperties.column.x.map((value, index) => (
        <FlexColumn
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          x={value}
          style={{ height: '200px' }}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexColumn>
      ))}

      <h2>Y Prop</h2>
      {flexProperties.column.y.map((value, index) => (
        <FlexColumn
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          y={value}
          style={{ height: '100px' }}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexColumn>
      ))}

      <h2>Content Prop</h2>
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
  name: 'Flex Column',
}

export default Demo
