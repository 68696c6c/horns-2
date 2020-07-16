/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Story from '_story'
import { flexProperties } from 'config'

import * as Styled from './stories.styles'

const Demo = () => {
  const colorTracker = [-1]
  return (
    <>
      <h1>flexibleRow & flexibleColumn</h1>
      <p>
        The <em>flexibleRow</em> and <em>flexibleColumn</em> traits provide CSS
        flex positioning to a components children.
      </p>

      <h2>flexibleRow</h2>
      <p>
        With the <em>flexibleRow</em> trait, the <em>x</em> prop controls the{' '}
        <em>align-items</em> property and the <em>y</em> prop controls the{' '}
        <em>justify-content</em> property.
      </p>
      <Story.Box>
        <h3>X Prop</h3>
        {flexProperties.row.x.map((value, index) => (
          <Styled.FlexRow index={index} x={value}>
            {Story.iterateColors(3, colorTracker, (c, i) => (
              <Story.Box color={c}>
                {value || 'default'} {i}
              </Story.Box>
            ))}
          </Styled.FlexRow>
        ))}

        <h3>Y Prop</h3>
        {flexProperties.row.y.map((value, index) => (
          <Styled.FlexRow index={index} y={value} style={{ height: '100px' }}>
            {Story.iterateColors(3, colorTracker, (c, i) => (
              <Story.Box color={c}>
                {value || 'default'} {i}
              </Story.Box>
            ))}
          </Styled.FlexRow>
        ))}

        <h3>Content Prop</h3>
        <div style={{ width: '600px' }}>
          {flexProperties.content.map((value, index) => (
            <Styled.FlexRow
              index={index}
              content={value}
              style={{ height: '300px' }}
              wrap
            >
              {Story.iterateColors(16, [-1], (c, i) => (
                <Story.Box color={c}>
                  {value || 'default'} {i}
                </Story.Box>
              ))}
            </Styled.FlexRow>
          ))}
        </div>
      </Story.Box>

      <h2>flexibleColumn</h2>
      <p>
        With the <em>flexibleColumn</em> trait, the <em>x</em> prop controls the{' '}
        <em>justify-content</em> property and the <em>y</em> prop controls the{' '}
        <em>align-items</em> property.
      </p>
      <Story.Box>
        <h3>X Prop</h3>
        {flexProperties.column.x.map((value, index) => (
          <Styled.FlexColumn
            index={index}
            x={value}
            style={{ height: '200px' }}
          >
            {Story.iterateColors(3, colorTracker, (c, i) => (
              <Story.Box color={c}>
                {value || 'default'} {i}
              </Story.Box>
            ))}
          </Styled.FlexColumn>
        ))}

        <h3>Y Prop</h3>
        {flexProperties.column.y.map((value, index) => (
          <Styled.FlexColumn
            index={index}
            y={value}
            style={{ height: '400px' }}
          >
            {Story.iterateColors(3, colorTracker, (c, i) => (
              <Story.Box color={c}>
                {value || 'default'} {i}
              </Story.Box>
            ))}
          </Styled.FlexColumn>
        ))}

        <h3>Content Prop</h3>
        {flexProperties.content.map((value, index) => (
          <Styled.FlexColumn
            index={index}
            content={value}
            style={{ height: '200px' }}
            wrap="wrap"
          >
            {Story.iterateColors(16, [-1], (c, i) => (
              <Story.Box color={c}>
                {value || 'default'} {i}
              </Story.Box>
            ))}
          </Styled.FlexColumn>
        ))}
      </Story.Box>
    </>
  )
}

Demo.story = {
  name: 'flexibleRow & flexibleColumn',
}

export default Demo
