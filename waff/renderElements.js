export default function renderElements(element) {
  if (element.props) {
    return "<dog className='Woof' />"
  }
  return "<dog />"
}
