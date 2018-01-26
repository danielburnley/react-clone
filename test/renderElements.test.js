import createElement from '../waff/createElement'
import renderElements from '../waff/renderElements'

/** @jsx createElement */

describe('render elements', () => {
  it('renders a single dog with no props or children', () => {
    let dog = <dog />
    expect(renderElements(dog)).toEqual("<dog />")
  })

  it('renders a single dog with props', () => {
    let dog = <dog className="Woof" />
    expect(renderElements(dog)).toEqual("<dog className='Woof' />")
  })

  it('renders a single element with a puppy', () => {
    let dog = <dog>puppy</dog>
    expect(renderElements(dog)).toEqual("<dog>puppy</dog>")
  })

  it('renders a single cat with no props or children', () => {
    let cat = <cat />
    expect(renderElements(cat)).toEqual("<cat />")
  })

  it('renders a cat with props', () => {
    let cat = <cat className='Meow' />
    expect(renderElements(cat)).toEqual("<cat className='Meow' />")
  })

  it('renders a cat with a kitten', () => {
    let cat = <cat>kitten</cat>
    expect(renderElements(cat)).toEqual("<cat>kitten</cat>")
  })

  it('renders a doggo with multiple props', () => {
    let dog = <dog noise='Woof' cuteness='yes' />
    let res = "<dog noise='Woof' cuteness='yes' />"
    expect(renderElements(dog)).toEqual(res)
  })

  it('renders a catto with kitten element', () => {
    let catto = <cat><kitten /></cat>
    let res = "<cat><kitten /></cat>"
    expect(renderElements(catto)).toEqual(res)
  })

  it('renders a catto with kitten element', () => {
    let catto = <cat><kitten className='cute' /></cat>
    let res = "<cat><kitten className='cute' /></cat>"
    expect(renderElements(catto)).toEqual(res)
  })

  it('renders a catto with cuteness with a kitten', () => {
    let catto = <cat className='cute'><kitten /></cat>
    let res = "<cat className='cute'><kitten /></cat>"
    expect(renderElements(catto)).toEqual(res)
  })

  it('renders a doggo with cuteness and with a pupper with slobberyness', () => {
    let doggo = <doggo className='cute'><pupper className='slobberyness' /></doggo>
    let res = "<doggo className='cute'><pupper className='slobberyness' /></doggo>"
    expect(renderElements(doggo)).toEqual(res)
  })

  it('renders a doggo with cuteness and with a pupper with slobberyness and says woof', () => {
    let doggo = <doggo className='cute'><pupper className='slobberyness'>woof</pupper></doggo>
    let res = "<doggo className='cute'><pupper className='slobberyness'>woof</pupper></doggo>"
    expect(renderElements(doggo)).toEqual(res)
  })
})
