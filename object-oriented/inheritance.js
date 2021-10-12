function Person(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.getFullName = function(){
    this.firstname+" "+this.lastname
}

function Student(age){
    this.age = age
}
//inherit the properties of super type
Student.prototype = new Person()
Student.prototype.getAge = function(){
    return this.age
}
console.clear()
var student = new Student(21)
student.firstname = 'Mayank'
student.lastname ='Kandpal'
console.log(student)