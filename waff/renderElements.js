export default function renderElements(element) {
  let type = element.type
  if (element.children) {
    return `<${type}>${element.children[0]}</${type}>`
  }

  let propString = ""
  for (let prop in element.props) {
    propString += `${[prop]}='${element.props[prop]}' `
  }
  return `<${type} ${propString}/>`
}
