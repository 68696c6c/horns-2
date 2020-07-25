/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import AccordionController from '.'

const items = [
  <h2>Item 0</h2>,
  <h2>Item 1</h2>,
  <h2>Item 2</h2>,
]

const subAccordionItems = [
  <AccordionController
    renderControl={({ index, handleClick }) => (
      <header onClick={handleClick} style={{ background: 'yellow' }}>SubControl {index}</header>
    )}
    renderContent={({ content }) => content}
    items={items}
  />,
  <AccordionController
    renderControl={({ index, handleClick }) => (
      <header onClick={handleClick} style={{ background: 'yellow' }}>SubControl {index}</header>
    )}
    renderContent={({ content }) => content}
    items={items}
  />,
  <AccordionController
    renderControl={({ index, handleClick }) => (
      <header onClick={handleClick} style={{ background: 'yellow' }}>SubControl {index}</header>
    )}
    renderContent={({ content }) => content}
    items={items}
  />,
]

const Demo = () => (
  <>
    <h1>AccordionController</h1>
    <Story.Grid>
      <Story.Box>
        <AccordionController
          renderControl={({ index, handleClick }) => (
            <header onClick={handleClick} style={{ background: 'orange' }}>Control {index}</header>
          )}
          items={[
            <AccordionController
              renderControl={({ index, handleClick }) => (
                <header onClick={handleClick} style={{ background: 'red' }}>SubAccordion {index}</header>
              )}
              renderContent={({ content }) => content}
              items={subAccordionItems}
            />,
            <AccordionController
              renderControl={({ index, handleClick }) => (
                <header onClick={handleClick} style={{ background: 'red' }}>SubAccordion {index}</header>
              )}
              renderContent={({ content }) => content}
              items={subAccordionItems}
            />,
            <AccordionController
              renderControl={({ index, handleClick }) => (
                <header onClick={handleClick} style={{ background: 'red' }}>SubAccordion {index}</header>
              )}
              renderContent={({ content }) => content}
              items={subAccordionItems}
            />,
          ]}
        />
      </Story.Box>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'AccordionController',
}

export default Demo
