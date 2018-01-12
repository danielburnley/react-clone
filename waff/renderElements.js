export default function renderElements(element) {
  if (element.children) {
    return "<dog>puppy</dog>"
  }
  if (element.props) {
    return `<${element.type} className='${element.props.className}' />`
  }
  return `<${element.type} />`
}
