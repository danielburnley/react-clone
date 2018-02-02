function renderElements(element) {
  let type = element.type
  let childString = ""
  for (let child of element.children) {
    childString += render(child)
  }

  let propString = generatePropString(element.props)

  if (childString.length === 0) {
    return `<${type}${propString} />`
  }
  return `<${type}${propString}>${childString}</${type}>`
}

function generatePropString(props) {
  let propString = ""

  for (let prop in props) {
    propString += ` ${[prop]}='${props[prop]}'`
  }

  return propString
}

export default function render(element) {
  if (typeof element === 'string') {
    return element
  } else if (typeof element.type === 'function') {
    return render(element.type({children: element.children[0]}))
  } else {
    return renderElements(element)
  }
}
