function Student(fname,lname){
    this.firstname = fname
    this.lastname = lname
}

var student = new Student("John","Scott")
student.city = "Delhi"
console.log(student)