function renderElementWithChildren(element) {
  let type = element.type
  let childString = ""
  for (let child of element.children) {
    childString += renderElements(child)
  }

  let propString = generatePropString(element.props)

  return `<${type}${propString}>${childString}</${type}>`
}

function renderElementWithoutChildren(element) {
  let type = element.type

  let propString = generatePropString(element.props)

  return `<${type}${propString} />`
}

function generatePropString(props) {
  let propString = ""

  for (let prop in props) {
    propString += ` ${[prop]}='${props[prop]}'`
  }

  return propString
}

export default function renderElements(element) {
  if (typeof element === 'string') {
    return element
  }

  if (element.children.length > 0) {
    return renderElementWithChildren(element)
  } else {
    return renderElementWithoutChildren(element)
  }
}
