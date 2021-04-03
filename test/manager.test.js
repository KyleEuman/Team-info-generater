const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 125;
  const e = new Manager("Jim", 1, "testjim@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jim", 1, "testjim@gmail.com", 125);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 125;
  const e = new Manager("Jim", 1, "testjim@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});