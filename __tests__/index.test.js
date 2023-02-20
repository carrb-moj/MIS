const cube  = '../index.js'

describe("cube function", () => {
    test ("Cube of 3 is 27", () => {
        expect(() => cube(3).toStrictEqual(27))
    })
})
