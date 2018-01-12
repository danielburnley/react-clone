export default function renderElements(element) {
  let type = element.type
  if (element.children) {
    return `<${type}>${element.children[0]}</${type}>`
  }
  if (element.props) {
    return `<${type} className='${element.props.className}' />`
  }
  return `<${type} />`
}
