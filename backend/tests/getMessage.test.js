const { getMessage } = require("../src/utils");

test("getMessage returns correct string", () => {
  expect(getMessage()).toBe("Hello from backend 🚀");
});
