function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Student.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};
var student1 = new Student("Mayank", "Kandpal");
var student2 = new Student("Rohan", "Verma");
var student3 = new Student("Rahul", "Sharma");
Student.prototype.city ="new delhi"
student1.city = "Boston"
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student1.getFullName())
console.log(student1)