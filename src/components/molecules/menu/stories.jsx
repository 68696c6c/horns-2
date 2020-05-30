/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import { Dropdown, DropdownOption } from '../../atoms'

import Menu from '.'

const Demo = () => (
  <>
    <h1>Menu</h1>
    <Story.Grid>
      <Story.Box>
        <Menu
          forceWidth
          renderControl={(open, ref, toggleOpen) => (
            <div
              ref={ref}
              onClick={toggleOpen}
              style={{
                padding: '0.25em',
              }}
            >
              Menu is {open ? 'open' : 'closed'}
            </div>
          )}
          renderMenu={(open, ref) => (
            <Dropdown open={open} ref={ref}>
              <DropdownOption>example</DropdownOption>
              <DropdownOption>example</DropdownOption>
              <DropdownOption>example</DropdownOption>
            </Dropdown>
          )}
        />
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Menu',
}

export default Demo
