const Intern = require("../lib/Intern");
const Employee = require("../lib/employee");

describe("Initialization", () => {
  it("Every Intern should have a school they are attending", () => {
    const intern = new Intern("UCI", "Tim", 3, "yahoo.com");

    expect(typeof intern.school).toBe("string");
    expect(intern.school).toBe("UCI");
  });
  it("A New Intern should initialize the name, id, and email from employee", () => {
    const intern = new Intern("UCI", "Tim", 3, "yahoo.com");

    expect(typeof intern.name).toBe("string");
    expect(typeof intern.id).toBe("number");
    expect(typeof intern.email).toBe("string");
  });
});
describe("Methods", () => {
  it("Interns should have a method to get their school", () => {
    const intern = new Intern("UCI", "Tim", 3, "yahoo.com");

    expect(intern.getSchool()).toBe("UCI");
  });
  it("Interns should have a role of intern", () => {
    const intern = new Intern("UCI", "Tim", 3, "yahoo.com");

    expect(intern.getRole()).toBe("Intern");
  });
});
