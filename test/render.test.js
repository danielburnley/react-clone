import createElement from '../waff/createElement'
import render from '../waff/render'

/** @jsx createElement */

describe('render', () => {

  describe('render elements', () => {
    it('renders a single dog with no props or children', () => {
      let dog = <dog />
      expect(render(dog)).toEqual("<dog />")
    })

    it('renders a single dog with props', () => {
      let dog = <dog className="Woof" />
      expect(render(dog)).toEqual("<dog className='Woof' />")
    })

    it('renders a single element with a puppy', () => {
      let dog = <dog>puppy</dog>
      expect(render(dog)).toEqual("<dog>puppy</dog>")
    })

    it('renders a single cat with no props or children', () => {
      let cat = <cat />
      expect(render(cat)).toEqual("<cat />")
    })

    it('renders a cat with props', () => {
      let cat = <cat className='Meow' />
      expect(render(cat)).toEqual("<cat className='Meow' />")
    })

    it('renders a cat with a kitten', () => {
      let cat = <cat>kitten</cat>
      expect(render(cat)).toEqual("<cat>kitten</cat>")
    })

    it('renders a doggo with multiple props', () => {
      let dog = <dog noise='Woof' cuteness='yes' />
      let res = "<dog noise='Woof' cuteness='yes' />"
      expect(render(dog)).toEqual(res)
    })

    it('renders a catto with kitten element', () => {
      let catto = <cat><kitten /></cat>
      let res = "<cat><kitten /></cat>"
      expect(render(catto)).toEqual(res)
    })

    it('renders a catto with kitten element', () => {
      let catto = <cat><kitten className='cute' /></cat>
      let res = "<cat><kitten className='cute' /></cat>"
      expect(render(catto)).toEqual(res)
    })

    it('renders a catto with cuteness with a kitten', () => {
      let catto = <cat className='cute'><kitten /></cat>
      let res = "<cat className='cute'><kitten /></cat>"
      expect(render(catto)).toEqual(res)
    })

    it('renders a doggo with cuteness and with a pupper with slobberyness', () => {
      let doggo = <doggo className='cute'><pupper className='slobberyness' /></doggo>
      let res = "<doggo className='cute'><pupper className='slobberyness' /></doggo>"
      expect(render(doggo)).toEqual(res)
    })

    it('renders a doggo with cuteness and with a pupper with slobberyness and says woof', () => {
      let doggo = <doggo className='cute'><pupper className='slobberyness'>woof</pupper></doggo>
      let res = "<doggo className='cute'><pupper className='slobberyness'>woof</pupper></doggo>"
      expect(render(doggo)).toEqual(res)
    })
  })

  describe('render stateless components', () => {
    it('renders a simple component', () => {
      let Dog = () => <span></span>
      expect(render(<Dog />)).toEqual('<span />')
    })

    it('renders a simple component with a text node child', () => {
      let Dog = ({children}) => <span>{children}</span>
      expect(render(<Dog>Woof</Dog>)).toEqual('<span>Woof</span>')
    })

    it('renders a doggo with a single pupper', () => {
      let Dog = ({children}) => <span>{children}</span>
      let Pupper = () => <div></div>
      expect(render(<Dog><Pupper /></Dog>)).toEqual('<span><div /></span>')
    })

    it('renders a doggo with two puppers', () => {
      let Dog = ({children}) => <span>{children}</span>
      let Pupper = () => <div></div>
      expect(render(<Dog><Pupper /><Pupper /></Dog>)).toEqual('<span><div /><div /></span>')
    })

    it('component-ception, the sequel to inception starring Waffles', () => {
      let Dog = () => <span>Woof woof woof</span>
      let Waffles = () => <span><Dog /></span>
      expect(render(<Waffle />)).toEqual('<span><span>Woof woof woof</span></span>')
    })

    it('renders a load of stuff??', () => {
      let Dog = ({children}) => <span>{children}</span>
      expect(
        render(
          <Dog><Dog>Woof</Dog><Dog>Bark</Dog></Dog>
        )
      ).toEqual(
        '<span><span>Woof</span><span>Bark</span></span>'
      )
    })

    describe.only('put some props in those 🐶🐶🐶🐶', () => {
      it('renders a doggo with some props', () => {
      let Dog = (props) => <h1>{props.name} the Dog</h1>
      expect(render(<Dog name='Waffles'/>)).toEqual('<h1>Waffles the Dog</h1>')
      })
    })
  })
})
