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
    let dog = createElement("dog", {}, 'puppy')
    expect(renderElements(dog)).toEqual("<dog>puppy</dog>")
  })

  it('renders a single cat with no props or children', () => {
    let cat = createElement("cat")
    expect(renderElements(cat)).toEqual("<cat />")
  })

  it('renders a cat with props', () => {
    let cat = createElement("cat", { className: "Meow" })
    expect(renderElements(cat)).toEqual("<cat className='Meow' />")
  })

  it('renders a cat with a kitten', () => {
    let cat = createElement("cat", {}, 'kitten')
    expect(renderElements(cat)).toEqual("<cat>kitten</cat>")
  })

  it('renders a doggo with multiple props', () => {
    let dog = createElement("dog", { noise: "Woof", cuteness: "yes" })
    let res = "<dog noise='Woof' cuteness='yes' />"
    expect(renderElements(dog)).toEqual(res)
  })

  it('renders a catto with kitten element', () => {
    let kitten = createElement("kitten")
    let catto = createElement("cat", {}, kitten)
    let res = "<cat><kitten /></cat>"
    expect(renderElements(catto)).toEqual(res)
  })
})
