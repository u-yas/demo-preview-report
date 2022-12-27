import { minus, sum } from "../src"
describe("example tests", () => {
  it("sum", () => {
    expect(sum(1,1)).toBe(2)
    expect(sum(1,2)).toBe(3)
  })

  it("minus", () => {
    expect(minus(1,1)).toBe(0)
    expect(minus(1,2)).toBe(-1)
  })
})