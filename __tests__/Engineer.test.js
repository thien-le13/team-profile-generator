const Engineer = require("../lib/Engineer");
const Employee = require("../lib/employee");

describe("Initialization", () => {
  it("Every Engineer should have a github username", () => {
    const engineer = new Engineer("gitUsr", "John", 2, "gmail.com");

    expect(typeof engineer.github).toBe("string");
  });
  it("A New Engineer should initialize the name, id, and email from employee", () => {
    const engineer = new Engineer("gitUsr", "John", 2, "gmail.com");

    expect(typeof engineer.name).toBe("string");
    expect(typeof engineer.id).toBe("number");
    expect(typeof engineer.email).toBe("string");
  });
});
describe("Methods", () => {
  it("Engineers should have a method to get github usernames", () => {
    const engineer = new Engineer("gitUsr", "John", 2, "gmail.com");

    expect(engineer.getGithub()).toBe("gitUsr");
  });
  it("An Engineer should have the role engineer", () => {
    const engineer = new Engineer("gitUsr", "John", 2, "gmail.com");

    expect(engineer.getRole()).toBe("Engineer");
  });
});
