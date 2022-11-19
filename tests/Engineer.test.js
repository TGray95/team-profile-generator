const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = 'username';
  const e = new Engineer("Name", 1, 'test@test.com', testValue)
  expect(e.github).toBe(testValue)
});

test("getRole() should return \"Engineer\"", () => {
  e = new Engineer
  expect(e.getRole()).toBe('Engineer')
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = 'username';
  const e = new Engineer("Name", 1, 'test@test.com', testValue)
  expect(e.getGithub()).toBe(testValue)
});