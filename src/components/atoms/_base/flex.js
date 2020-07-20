/* eslint-disable react/forbid-foreign-prop-types */
import { chromatic, margined, padded, responsive } from '../../../traits'
// import PropTypes from 'prop-types'
// import { css } from '@emotion/core'
//
// import { flexProperties } from '../../../config'
// import {
//   chromatic,
//   // flexible,
//   margined,
//   padded,
//   responsive,
// } from '../../../traits'

// eslint-disable-next-line import/prefer-default-export
export const flex = {
  styles: () => [
    chromatic.styles,
    margined.styles,
    padded.styles,
    responsive.styles,
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...margined.propTypes(),
    ...padded.propTypes(),
    ...responsive.propTypes(),
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(),
    ...margined.defaultProps(),
    ...padded.defaultProps(),
    ...responsive.defaultProps(),
  }),
}

// const baseFlex = {
//   styles: () => [
//     chromatic.styles,
//     ...flexible.styles(),
//     margined.styles,
//     padded.styles,
//     responsive.styles,
//   ],
//   propTypes: () => ({
//     ...chromatic.propTypes(),
//     ...flexible.propTypes(),
//     ...margined.propTypes(),
//     ...padded.propTypes(),
//     ...responsive.propTypes(),
//   }),
//   defaultProps: () => ({
//     ...chromatic.defaultProps(),
//     ...flexible.defaultProps(),
//     ...margined.defaultProps(),
//     ...padded.defaultProps(),
//     ...responsive.defaultProps(),
//   }),
// }
//
// const justifyPropMap = {
//   start: 'flex-start',
//   center: 'center',
//   end: 'flex-end',
//   around: 'space-around',
//   between: 'space-between',
//   evenly: 'space-evenly',
// }
//
// const alignItemsPropMap = {
//   start: 'flex-start',
//   center: 'center',
//   end: 'flex-end',
//   stretch: 'stretch',
//   baseline: 'baseline',
// }
//
// const justifyMap = {
//   row: { left: 'start', right: 'end' },
//   column: { top: 'start', bottom: 'end' },
// }
//
// const alignMap = {
//   row: { top: 'start', bottom: 'end' },
//   column: { left: 'start', right: 'end' },
// }
//
// export const flexRow = {
//   styles: () => [
//     ...baseFlex.styles(),
//     ({ x, y, reversed }) => {
//       const justify = justifyMap.row[x]
//       const items = alignMap.row[y]
//       return css`
//         flex-direction: ${reversed ? 'row-reversed' : 'row'};
//         justify-content: ${justifyPropMap[justify]};
//         align-items: ${alignItemsPropMap[items]};
//       `
//     },
//   ],
//   propTypes: () => ({
//     ...baseFlex.propTypes(),
//     x: PropTypes.oneOf(flexProperties.row.x),
//     y: PropTypes.oneOf(flexProperties.row.y),
//   }),
//   defaultProps: () => ({
//     ...baseFlex.defaultProps(),
//     x: null,
//     y: null,
//   }),
// }
//
// export const flexColumn = {
//   styles: () => [
//     ...baseFlex.styles(),
//     ({ x, y, reversed }) => {
//       const justify = justifyMap.column[y]
//       const items = alignMap.column[x]
//       return css`
//         flex-direction: ${reversed ? 'column-reversed' : 'column'};
//         justify-content: ${justifyPropMap[justify]};
//         align-items: ${alignItemsPropMap[items]};
//       `
//     },
//   ],
//   propTypes: () => ({
//     ...baseFlex.propTypes(),
//     x: PropTypes.oneOf(flexProperties.column.x),
//     y: PropTypes.oneOf(flexProperties.column.y),
//   }),
//   defaultProps: () => ({
//     ...baseFlex.defaultProps(),
//     x: null,
//     y: null,
//   }),
// }
