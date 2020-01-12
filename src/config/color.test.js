/* global jest, describe, it, expect */
import ColorConfig from './color'

describe('ColorConfig', () => {
  it('should return a ColorConfig instance', () => {
    const c = new ColorConfig()
    expect(c instanceof ColorConfig).toEqual(true)
  })
})
