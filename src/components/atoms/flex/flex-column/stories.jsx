/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { iterateColors, Box } from '_story'
import { flexProperties } from 'config'

import FlexColumn, { ItemColumn } from '.'

const Demo = () => {
  const colorTracker = [-1]
  return (
    <>
      <h1>FlexColumn</h1>
      <p>
        The <em>FlexColumn</em> component arranges uses CSS flex properties to
        align itself and/or its children.
      </p>
      <FlexColumn color="dark" marginY="medium">
        <Box color="primary">Box 1</Box>
        <Box color="secondary">Box 2</Box>
        <Box color="tertiary">Box 3</Box>
      </FlexColumn>

      <h2>ItemColumn Alias</h2>
      <p>
        The <em>ItemColumn</em> component is an alias for{' '}
        <code>{`<FlexColumn x="center" y="evenly" fluid />`}</code>
      </p>
      <ItemColumn
        color="dark"
        marginY="medium"
        style={{ padding: '1em', height: '400px' }}
      >
        <Box color="primary">Box 1</Box>
        <Box color="secondary">Box 2</Box>
        <Box color="tertiary">Box 3</Box>
        <Box color="success">Box 4</Box>
      </ItemColumn>

      <h2>Fluid Prop</h2>
      <p>
        The <em>fluid</em> prop disables container padding.
      </p>
      <FlexColumn color="neutral" marginY="medium" fluid>
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
          style={{ height: '400px' }}
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
          style={{ height: '200px' }}
          wrap="wrap"
          fluid
        >
          {iterateColors(16, [-1], (c, i) => (
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
