/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { flexProperties } from 'config'

import Flex, { Box, FlexColumn, FlexRow } from '.'

// @TODO demo the remaining props
const colors = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
]

const Demo = () => {
  let colorCount = -1
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
          {[1, 2, 3].map(i => {
            colorCount += 1
            if (colorCount >= colors.length) {
              colorCount = 0
            }
            return (
              <Box color={colors[colorCount]}>
                {value || 'default'} {i}
              </Box>
            )
          })}
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
          {[1, 2, 3].map(i => {
            colorCount += 1
            if (colorCount >= colors.length) {
              colorCount = 0
            }
            return (
              <Box color={colors[colorCount]}>
                {value || 'default'} {i}
              </Box>
            )
          })}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => {
              colorCount += 1
              if (colorCount >= colors.length) {
                colorCount = 0
              }
              return (
                <Box color={colors[colorCount]}>
                  {value || 'default'} {i}
                </Box>
              )
            })}
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
          {[1, 2, 3].map(i => {
            colorCount += 1
            if (colorCount >= colors.length) {
              colorCount = 0
            }
            return (
              <Box color={colors[colorCount]}>
                {value || 'default'} {i}
              </Box>
            )
          })}
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
          {[1, 2, 3].map(i => {
            colorCount += 1
            if (colorCount >= colors.length) {
              colorCount = 0
            }
            return (
              <Box color={colors[colorCount]}>
                {value || 'default'} {i}
              </Box>
            )
          })}
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => {
            colorCount += 1
            if (colorCount >= colors.length) {
              colorCount = 0
            }
            return (
              <Box color={colors[colorCount]}>
                {value || 'default'} {i}
              </Box>
            )
          })}
        </FlexColumn>
      ))}
    </>
  )
}

Demo.story = {
  name: 'Flex',
}

export default Demo
