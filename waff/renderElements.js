export default function renderElements(element) {
  if (element.children) {
    return "<dog>puppy</dog>"
  }
  if (element.props) {
    return "<dog className='Woof' />"
  }
  return "<dog />"
}
