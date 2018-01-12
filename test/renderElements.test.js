import createElement from '../waff/createElement'
import renderElements from '../waff/renderElements'

describe('render elements', () => {
  it('renders a single dog with no props or children', () => {
    let dog = createElement("dog")
    expect(renderElements(dog)).toEqual("<dog />")
  })
})
