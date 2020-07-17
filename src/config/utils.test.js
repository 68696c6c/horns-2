/* global describe, it, expect */
import {
  mergeProps,
  evalCorners,
  mergeConfigs,
  valueToNumber,
  isNumber,
  isString,
} from './utils'

describe('mergeProps', () => {
  it('should prefer prop over config', () => {
    const props = {
      all: 'prop-all',
      left: 'prop-left',
      topLeft: 'prop-topLeft',
      bottomLeft: 'prop-bottomLeft',
    }
    const config = {
      all: 'config-all',
      left: 'config-left',
      topLeft: 'config-topLeft',
      bottomLeft: 'config-bottomLeft',
    }
    const result = mergeProps(props, config)
    expect(result.all).toEqual(props.all)
    expect(result.left).toEqual(props.left)
    expect(result.topLeft).toEqual(props.topLeft)
    expect(result.bottomLeft).toEqual(props.bottomLeft)
  })
  it('should use config if a prop is not provided', () => {
    const props = {
      a: 'prop-all',
      b: null,
    }
    const config = {
      a: 'config-a',
      b: 'config-b',
    }
    const result = mergeProps(props, config)
    expect(result.a).toEqual(props.a)
    expect(result.b).toEqual(config.b)
  })
  it('should filter out props that are not in the config', () => {
    const props = {
      a: 'prop-all',
      c: 'prop-c',
    }
    const config = {
      a: 'config-a',
      b: 'config-b',
    }
    const result = mergeProps(props, config)
    expect(result.a).toEqual(props.a)
    expect(result.b).toEqual(config.b)
    expect(typeof result.c === 'undefined').toBe(true)
  })
})

describe('evalCorners', () => {
  it('should default to the all value', () => {
    const props = {
      all: 'all',
      top: null,
      bottom: null,
      left: null,
      right: null,
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.all)
    expect(result.topRight).toEqual(props.all)
    expect(result.bottomLeft).toEqual(props.all)
    expect(result.bottomRight).toEqual(props.all)
  })
  it('should set left corners to "left"', () => {
    const props = {
      all: 'all',
      top: null,
      bottom: null,
      left: 'left',
      right: null,
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.left)
    expect(result.topRight).toEqual(props.all)
    expect(result.bottomLeft).toEqual(props.left)
    expect(result.bottomRight).toEqual(props.all)
  })
  it('should set right corners to "right"', () => {
    const props = {
      all: 'all',
      top: null,
      bottom: null,
      left: null,
      right: 'right',
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.all)
    expect(result.topRight).toEqual(props.right)
    expect(result.bottomLeft).toEqual(props.all)
    expect(result.bottomRight).toEqual(props.right)
  })
  it('should top corners to "top"', () => {
    const props = {
      all: 'all',
      top: 'top',
      bottom: null,
      left: null,
      right: null,
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.top)
    expect(result.topRight).toEqual(props.top)
    expect(result.bottomLeft).toEqual(props.all)
    expect(result.bottomRight).toEqual(props.all)
  })
  it('should bottom corners to "bottom"', () => {
    const props = {
      all: 'all',
      top: null,
      bottom: 'bottom',
      left: null,
      right: null,
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.all)
    expect(result.topRight).toEqual(props.all)
    expect(result.bottomLeft).toEqual(props.bottom)
    expect(result.bottomRight).toEqual(props.bottom)
  })
  // arbitrary, but we have to prefer one over the other
  it('should treat y values as more specific than x values', () => {
    const props = {
      all: 'all',
      top: 'top',
      bottom: null,
      left: 'left',
      right: null,
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: null,
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.top)
    expect(result.topRight).toEqual(props.top)
    expect(result.bottomLeft).toEqual(props.left)
    expect(result.bottomRight).toEqual(props.all)
  })
  it('should treat corner values as the most specific rule', () => {
    const props = {
      all: 'all',
      top: null,
      bottom: 'bottom',
      left: null,
      right: 'right',
      topLeft: null,
      topRight: null,
      bottomLeft: null,
      bottomRight: 'bottomRight',
    }
    const result = evalCorners(props)
    expect(result.topLeft).toEqual(props.all)
    expect(result.topRight).toEqual(props.right)
    expect(result.bottomLeft).toEqual(props.bottom)
    expect(result.bottomRight).toEqual(props.bottomRight)
  })
})

describe('mergeConfigs', () => {
  it('should return the passed value', () => {
    const c = { key: 'value' }
    const d = { key: 'value', key2: 'value2' }
    const result = mergeConfigs(c, d)
    expect(result.key).toEqual('value')
    expect(result.key2).toEqual('value2')
  })

  it('should work with nested objects', () => {
    const expected = {
      field1: 'expected-field1',
      field2: {
        key: 'expected-field2-key',
      },
    }
    const config = {
      ...expected,
    }
    const def = {
      field1: 'default-field1',
      field2: {
        key: 'default-field2-key',
      },
      field3: {
        key: 'default-field3-key',
      },
    }
    const result = mergeConfigs(config, def)
    expect(result.field1).toEqual(expected.field1)
    expect(result.field2).toEqual(expected.field2)
    expect(result.field2.key).toEqual(expected.field2.key)
    expect(result.field3.key).toEqual(def.field3.key)
  })
})

describe('isNumber', () => {
  it('should return true if the provided value is a number', () => {
    const result = isNumber(1)
    expect(result).toEqual(true)
  })
  it('should return true if the provided value is zero', () => {
    const result = isNumber(0)
    expect(result).toEqual(true)
  })
  it('should return false if the provided value is a string', () => {
    const result = isNumber('1')
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is an object', () => {
    const result = isNumber({})
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is an array', () => {
    const result = isNumber([])
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is NaN', () => {
    const result = isNumber(NaN)
    expect(result).toEqual(false)
  })
})

describe('isString', () => {
  it('should return true if the provided value is a string', () => {
    const result = isString('hello')
    expect(result).toEqual(true)
  })
  it('should return true for the result of new String()', () => {
    // eslint-disable-next-line no-new-wrappers
    const result = isString(new String('string'))
    expect(result).toEqual(true)
  })
  it('should return false if the provided value is a number', () => {
    const result = isString(1)
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is an object', () => {
    const result = isString({})
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is an array', () => {
    const result = isString([])
    expect(result).toEqual(false)
  })
  it('should return false if the provided value is NaN', () => {
    const result = isString(NaN)
    expect(result).toEqual(false)
  })
})

describe('valueToNumber', () => {
  it('should return the passed value as a "numbery" value', () => {
    const result = valueToNumber('78.1px')
    // Exact comparision will fail because valueToNumber intentionally does not actually cast the return value.
    // eslint-disable-next-line eqeqeq
    expect(result == 78.1).toBe(true)
  })
  it('should strip "px" units', () => {
    const result = valueToNumber('.1px')
    expect(result).not.toContain('px')
  })
  it('should strip "em" units', () => {
    const result = valueToNumber('1em')
    expect(result).not.toContain('px')
  })
  it('should strip "rem" units', () => {
    const result = valueToNumber('0.5rem')
    expect(result).not.toContain('rem')
  })
  it('should strip "vw" units', () => {
    const result = valueToNumber('60vw')
    expect(result).not.toContain('vw')
  })
  it('should strip "vh" units', () => {
    const result = valueToNumber('5.9vh')
    expect(result).not.toContain('vh')
  })
  it('should strip "cm" units', () => {
    const result = valueToNumber('34cm')
    expect(result).not.toContain('cm')
  })
  it('should strip "mm" units', () => {
    const result = valueToNumber('9mm')
    expect(result).not.toContain('mm')
  })
  it('should strip "in" units', () => {
    const result = valueToNumber('4in')
    expect(result).not.toContain('in')
  })
  it('should strip "pt" units', () => {
    const result = valueToNumber('7pt')
    expect(result).not.toContain('pt')
  })
  it('should strip "pc" units', () => {
    const result = valueToNumber('.2pc')
    expect(result).not.toContain('pc')
  })
  it('should strip "ex" units', () => {
    const result = valueToNumber('0ex')
    expect(result).not.toContain('ex')
  })
  it('should strip "ch" units', () => {
    const result = valueToNumber('5ch')
    expect(result).not.toContain('ch')
  })
  it('should strip "vmin" units', () => {
    const result = valueToNumber('1vmin')
    expect(result).not.toContain('vmin')
  })
  it('should strip "vmax" units', () => {
    const result = valueToNumber('100vmax')
    expect(result).not.toContain('vmax')
  })
  it('should strip "%" units', () => {
    const result = valueToNumber('350%')
    expect(result).not.toContain('%')
  })
})
