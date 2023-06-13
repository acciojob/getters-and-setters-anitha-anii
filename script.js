class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Your Cypress test cases...




describe("Person, Student, and Teacher", () => {
  it("should log the correct messages when a student studies", () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
      const Student = win.Student;
      const student = new Student("John", 30);
      expect(student.name).to.equal("John");
      student.study();
      cy.get("@consoleLog").should("be.calledWith", "John is studying.");
    });
  });

  it("should log the correct messages when a teacher teaches", () => {
    cy.visit(baseUrl + "/main.html");
    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
      const Teacher = win.Teacher;
      const teacher = new Teacher("Alice", 30);
      expect(teacher.name).to.equal("Alice");
      teacher.teach();
      cy.get("@consoleLog").should("be.calledWith", "Alice is teaching.");
    });
  });
});



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;