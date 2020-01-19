/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

import { colors } from '../config'
import { colorable } from './color'

const Shade = styled.div(
  ...colorable.styles,
  ({ prominent }) =>
    css`
      padding: ${prominent ? '2em' : '1em'};
      border-style: solid;
      border-top-width: 0;
      border-bottom-width: 0;
      border-left-width: 0.5em;
      border-right-width: 0.5em;
    `
)

const StyledShades = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const StyledColor = styled.div`
  text-align: center;
  margin: 1em;
`

const Color = ({ colorway }) => (
  <StyledColor>
    <h1>{colorway}</h1>
    <StyledShades>
      <Shade colorway={`${colorway}.darker`}>darker</Shade>
      <Shade colorway={`${colorway}.dark`}>dark</Shade>
      <Shade colorway={colorway} prominent>
        base
      </Shade>
      <Shade colorway={`${colorway}.light`}>light</Shade>
      <Shade colorway={`${colorway}.lighter`}>lighter</Shade>
    </StyledShades>
  </StyledColor>
)

Color.propTypes = {
  colorway: PropTypes.oneOf(colors).isRequired,
}

const StyledColors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const NeutralColors = () => (
  <StyledColor>
    <h1>dark, neutral, light</h1>
    <StyledShades>
      <Shade colorway="dark" prominent>
        dark base
      </Shade>
      <Shade colorway="dark.light">dark light</Shade>
      <Shade colorway="dark.lighter">dark lighter</Shade>

      <Shade colorway="neutral.darker">neutral darker</Shade>
      <Shade colorway="neutral.dark">neutral dark</Shade>
      <Shade colorway="neutral" prominent>
        neutral base
      </Shade>
      <Shade colorway="neutral.light">neutral light</Shade>
      <Shade colorway="neutral.lighter">neutral lighter</Shade>

      <Shade colorway="light.darker">light darker</Shade>
      <Shade colorway="light.dark">light dark</Shade>
      <Shade colorway="light" prominent>
        light base
      </Shade>
    </StyledShades>
  </StyledColor>
)

// eslint-disable-next-line import/prefer-default-export
export const Colors = () => (
  <>
    <StyledColors>
      <Color colorway="primary" />
      <Color colorway="secondary" />
      <Color colorway="tertiary" />
    </StyledColors>
    <NeutralColors />
    <StyledColors>
      <Color colorway="success" />
      <Color colorway="info" />
      <Color colorway="warning" />
      <Color colorway="danger" />
    </StyledColors>
  </>
)
