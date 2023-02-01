const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

describe("Initialization", () => {
  it("A New Manager should contain an office number", () => {
    const manager = new Manager(1, "John", 2, "gmail.com");

    expect(typeof manager.officeNumber == "number");
  });
  it("A New Manager should initialize the name, id, and email from employee", () => {
    const manager = new Manager(1, "Name", 5, "gmail.com");

    expect(typeof manager.name).toBe("string");
    expect(typeof manager.id).toBe("number");
    expect(typeof manager.email).toBe("string");
  });
});
describe("Methods", () => {
  it("A Manager's role should be 'Manager'", () => {
    const manager = new Manager(1, "John", 2, "gmail.com");

    expect(manager.getRole()).toBe("Manager");
  });
});
