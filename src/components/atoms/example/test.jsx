/* global describe, it, expect, beforeAll */
import React from 'react'
import { mount } from 'enzyme'

import Button from '.'

describe('Button', () => {
  let component = {}
  beforeAll(() => {
    component = mount(<Button>Test</Button>)
  })
  it('should render without errors', () => {
    expect(component).toHaveLength(1)
  })
})
