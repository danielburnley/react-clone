import createElement from "../waff/createElement"

describe("createElement", () => {
  it('creates an object with a type', () => {
    expect(createElement("div")).toEqual({type: "div"})
  })

  it('creates an object with props', () => {
    expect(createElement("div", { className: "Waff" })).toEqual({type: "div", props: { className: "Waff" }})
  })

  it('creates an object with children', () => {
    expect(createElement("div", {}, ['waffles'])).toEqual({type: "div", props: {}, children: ['waffles']})
  })

  it("does some shit", () => {
    let res = document.createElement("div")
    expect("<div />").toEqual(res)
  })
})
