import createElement from '../waff/createElement'
import renderElements from '../waff/renderElements'

describe('render elements', () => {
  it('renders a single dog with no props or children', () => {
    let dog = createElement("dog")
    expect(renderElements(dog)).toEqual("<dog />")
  })

  it('renders a single dog with props', () => {
    let dog = createElement("dog", { className: "Woof" })
    expect(renderElements(dog)).toEqual("<dog className='Woof' />")
  })

  it('renders a single element with a puppy', () => {
    let dog = createElement("dog", {}, ['puppy'])
    expect(renderElements(dog)).toEqual("<dog>puppy</dog>")
  })

  it('renders a single cat with no props or children', () => {
    let cat = createElement("cat")
    expect(renderElements(cat)).toEqual("<cat />")
  })
})
