const { MyClass } = require("jest-bug");
test("should resolve to the correct class", () => {
    const x = new MyClass();
    expect(x.greet()).toEqual("hello from node");
});
