//complete this code
class Person {
	 constructor(name, age) {
    this._name = name;
    this._age = age;
  }

	 get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
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


let student = new Student("John", 25);
student.study(); 
let student1 = new Student("Alice", 25);
student1.study(); 

let teacher = new Teacher("John", 40);
teacher.teach(); 
let teacher1 = new Teacher("Alice", 40);
teacher1.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;