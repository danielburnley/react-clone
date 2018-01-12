import createElement from "../waff/createElement"

describe("createElement", () => {
  it('creates an object with a type', () => {
    expect(createElement("div")).toEqual({type: "div", props: undefined, children: []})
  })

  it('creates an object with props', () => {
    expect(createElement("div", { className: "Waff" })).toEqual({type: "div", props: { className: "Waff" }, children: []})
  })

  it('creates an object with children', () => {
    expect(createElement("div", {}, 'waffles')).toEqual({type: "div", props: {}, children: ['waffles']})
  })

  it('creates an element with child element', () => {
    let expectedElement = {
      type: "div", props: {}, children: [
        {type: "dog", props: {}, children: ['puppy']},
      ]
    }
    let puppy = createElement("dog", {}, 'puppy')

    expect(createElement("div", {}, puppy))
  })
})
