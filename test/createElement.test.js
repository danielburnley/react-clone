describe("waff.createElement", () => {
  it('creates an object with a type', () => {
    expect(createElement("div")).toBe({"type": "div"})
  })
})
