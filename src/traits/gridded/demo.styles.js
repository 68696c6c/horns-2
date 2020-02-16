import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { gridded } from '.'

export const Grid = styled.div(
  ...gridded.styles,
  () =>
    css`
      background-color: black;
      padding-top: 1em;
      padding-bottom: 1em;
    `
)
Grid.propTypes = gridded.propTypes()
Grid.defaultProps = gridded.defaultProps()

export const Column = styled.div(
  () =>
    css`
      padding: 1em;
      &:nth-child(1) {
        background: #ff0000;
      }
      &:nth-child(2) {
        background: #dc3545;
      }
      &:nth-child(3) {
        background: #fd7e14;
      }
      &:nth-child(4) {
        background: #ffaa00;
      }
      &:nth-child(5) {
        background: #ffc107;
      }
      &:nth-child(6) {
        background: yellowgreen;
      }
      &:nth-child(7) {
        background: #28a745;
      }
      &:nth-child(8) {
        background: seagreen;
      }
      &:nth-child(9) {
        background: #17a2b8;
      }
      &:nth-child(10) {
        background: #1a99ff;
      }
      &:nth-child(11) {
        background: #3f00ff;
      }
      &:nth-child(12) {
        background: #7f00ff;
      }
    `
)
