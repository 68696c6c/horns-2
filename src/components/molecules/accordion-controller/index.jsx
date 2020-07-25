import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useRowIDs } from '../../../hooks'

import * as Styled from './styles'

const AccordionController = ({ items, renderControl, renderContent }) => {
  const [activeItem, setActiveItem] = useState(-1)
  const [itemIDs] = useRowIDs(items)

  return (
    <Styled.Container>
      {items.map((item, index) => (
        <React.Fragment key={itemIDs[index] || index}>
          {renderControl({ index, handleClick: () => setActiveItem(index) })}
          <Styled.AccordionContent active={index === activeItem}>
            {renderContent({ content: item })}
          </Styled.AccordionContent>
        </React.Fragment>
      ))}
    </Styled.Container>
  )
}

AccordionController.propTypes = {
  renderControl: PropTypes.func.isRequired,
  renderContent: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.node),
}

AccordionController.defaultProps = {
  renderContent: ({ content }) => content,
  items: [],
}

export default AccordionController
