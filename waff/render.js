function renderElementWithChildren(element) {
  let type = element.type
  let childString = ""
  for (let child of element.children) {
    childString += render(child)
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

function renderElements(element) {
  if (typeof element === 'string') {
    return element
  }

  if (element.children.length > 0) {
    return renderElementWithChildren(element)
  } else {
    return renderElementWithoutChildren(element)
  }
}

export default function render(element) {
  if (typeof element.type === 'function') {
    return render(element.type({children: element.children[0]}))
  } else {
    return renderElements(element)
  }
}
