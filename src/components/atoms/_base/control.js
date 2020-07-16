/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import {
  bordered,
  chromaticSurface,
  inline,
  interactive,
  margined,
  padded,
  rounded,
  typographic,
} from '../../../traits'

export const controllableDefaultProps = {
  cursor: 'text',
  font: 'control',
  margin: 'min',
  padding: 'xSmall',
}

export const baseControl = {
  styles: () => [
    bordered.styles,
    chromaticSurface.styles,
    margined.styles,
    rounded.styles,
    typographic.styles,
  ],
  propTypes: () => ({
    ...bordered.propTypes(),
    ...chromaticSurface.propTypes(),
    ...margined.propTypes(),
    ...rounded.propTypes(),
    ...typographic.propTypes(),
  }),
  defaultProps: () => {
    const { font, margin } = controllableDefaultProps
    return {
      ...bordered.defaultProps(),
      ...chromaticSurface.defaultProps(),
      ...margined.defaultProps({ margin }),
      ...rounded.defaultProps(),
      ...typographic.defaultProps(font),
    }
  },
}

export const control = {
  styles: () => [
    ...baseControl.styles(),
    inline.styles,
    interactive.styles,
    padded.styles,
    () => css`
      display: inline-flex;
      box-sizing: content-box;
      vertical-align: middle;
    `,
  ],
  propTypes: () => ({
    ...baseControl.propTypes(),
    ...inline.propTypes(),
    ...interactive.propTypes(),
    ...padded.propTypes({ paddingConfig: 'controls' }),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  defaultProps: () => {
    const { padding, cursor } = controllableDefaultProps
    return {
      ...baseControl.defaultProps(),
      ...inline.defaultProps(),
      ...interactive.defaultProps(false, false, cursor),
      ...padded.defaultProps({ padding }),
      placeholder: '',
      required: false,
    }
  },
}

export const select = {
  styles: () => [
    ...control.styles(),
    () => css`
      appearance: none;
      &::-ms-expand {
        display: none;
      }
    `,
  ],
  propTypes: () => ({
    ...control.propTypes(),
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ),
  }),
  defaultProps: () => ({
    ...control.defaultProps(),
    cursor: 'pointer',
    multiline: false,
    multiple: false,
    options: [],
  }),
}
