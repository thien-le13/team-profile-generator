const Employee = require("../lib/employee");

describe("initialization", () => {
  it("New Employee should have a name and email that is a string and an id that is a number", () => {
    const employee = new Employee("Name", 5, "gmail.com");

    expect(typeof employee.name).toBe("string");
    expect(typeof employee.id).toBe("number");
    expect(typeof employee.email).toBe("string");
  });
});
describe("Methods", () => {
  it("Each employee should have a function to access its name, id, and email that were given to the constructor", () => {
    const name = "Name";
    const id = 4;
    const email = "gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.getName == name);
    expect(employee.getId == id);
    expect(employee.getEmail == email);
  });
  it("Employee should have a function to return its role", () => {
    const employee = new Employee("Name", 5, "gmail.com");

    expect(employee.getRole == "Employee");
  });
});
