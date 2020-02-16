/* global describe, it, expect */
import { mergeConfigs, isNumber, isString } from './utils'

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
