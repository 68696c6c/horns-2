/* global describe, it, expect */
import { mergeConfigs } from './utils'

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
