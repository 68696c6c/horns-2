/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { iterateColors } from '_story'
import { flexProperties } from 'config'

import FlexRow from '.'
import { Box } from '..'

const Demo = () => {
  const colorTracker = [-1]
  return (
    <>
      <h1>FlexRow</h1>
      <p>
        The FlexColumn component arranges uses CSS flex properties to align
        itself and/or its children.
      </p>
      <FlexRow color="dark" marginY="medium">
        <Box color="primary">Box 1</Box>
        <Box color="secondary">Box 2</Box>
        <Box color="tertiary">Box 3</Box>
      </FlexRow>
      <FlexRow color="dark" marginY="medium" fluid>
        <Box color="success">Box 1</Box>
        <Box color="info">Box 2</Box>
        <Box color="warning">Box 3</Box>
        <Box color="danger">Box 4</Box>
      </FlexRow>

      <h2>X Prop</h2>
      {flexProperties.row.x.map((value, index) => (
        <FlexRow
          color={index % 2 === 0 ? 'dark' : 'neutral'}
          marginY="medium"
          x={value}
        >
          {iterateColors(3, colorTracker, (c, i) => (
            <Box color={c}>
              {value || 'default'} {i}
            </Box>
          ))}
        </FlexRow>
      ))}

      <h2>Y Prop</h2>
      {flexProperties.row.y.map((value, index) => (
        <FlexRow
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
        </FlexRow>
      ))}

      <h2>Content Prop</h2>
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
    </>
  )
}

Demo.story = {
  name: 'Flex Box',
}

export default Demo
