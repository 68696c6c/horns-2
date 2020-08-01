import _cloneDeep from 'lodash.clonedeep'

export const renderLinks = (links, color, layout, itemCallback, menuCallback) => {
  return links.map((link, index) => {
    if (link.links && link.links.length) {
      return menuCallback(link, index, color, layout, itemCallback, menuCallback)
    }
    return itemCallback(link, index, color, layout)
  })
}

export const cloneWithIDs = (inputLinks, currentHref, makeID) => {
  let currentID
  const addIDRecursively = obj => {
    if (Array.isArray(obj)) {
      obj.forEach(addIDRecursively)
    } else if (obj && typeof obj === 'object') {
      // The whole point of this function is to add keys to the input object which is already a
      // clone of the object the caller provided so we aren't concerned about this side-affect.
      // eslint-disable-next-line no-param-reassign
      obj.id = makeID(obj)
      if (obj.href === currentHref) {
        currentID = obj.id
      }
      Object.keys(obj).forEach(k => addIDRecursively(obj[k]))
    }
  }
  const clonedLinks = _cloneDeep(inputLinks)
  addIDRecursively(clonedLinks)
  return [clonedLinks, currentID]
}

export const makeLinkMap = inputLinks => {
  const iterateLinks = (links, callback, incrementLevel, decrementLevel) => {
    links.forEach((link, index) => {
      callback(link, index)
      if (link.links && link.links.length) {
        incrementLevel(link)
        iterateLinks(link.links, callback, incrementLevel, decrementLevel)
        decrementLevel(link)
      }
    })
  }

  const linkIDs = []
  const linkMap = {}
  iterateLinks(
    inputLinks,
    link => {
      linkMap[link.id] = [...linkIDs, link.id]
    },
    link => {
      linkIDs.push(link.id)
    },
    link => {
      const index = linkIDs.indexOf(link.id)
      linkIDs.splice(index, 1)
    }
  )
  return linkMap
}
