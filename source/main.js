import createElement from "../waff/createElement"

/** @jsx createElement */

const MyComponent = () => <span></span>

const a = (
  <div>Waff</div>
)

const b = (
  <MyComponent className="maoe">Cats are cooler than waffles</MyComponent>
)

console.log(a)
