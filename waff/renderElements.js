export default function renderElements(element) {
  if (typeof element === 'string') {
    return element
  }

  let type = element.type

  if (element.children.length > 0) {
    let childString = ""
    for (let child of element.children) {
      childString += renderElements(child)
    }
    return `<${type}>${childString}</${type}>`
  }

  let propString = ""
  for (let prop in element.props) {
    propString += `${[prop]}='${element.props[prop]}' `
  }
  return `<${type} ${propString}/>`
}
