const { add, subtract, multiply } = require("../src/script");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(multiply(4, 3)).toBe(12);
});
