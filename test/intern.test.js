const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "USF";
  const e = new Intern("Jim", 1, "testjim@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jim", 1, "testjim@gmail.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "USF";
  const e = new Intern("Jim", 1, "testjim@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});