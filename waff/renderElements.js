function renderElementWithChildren(element) {
  let type = element.type
  let childString = ""
  for (let child of element.children) {
    childString += renderElements(child)
  }
  return `<${type}>${childString}</${type}>`
}

function renderElementWithoutChildren(element) {
  let type = element.type
  let propString = ""

  for (let prop in element.props) {
    propString += `${[prop]}='${element.props[prop]}' `
  }

  return `<${type} ${propString}/>`
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
