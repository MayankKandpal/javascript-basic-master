class Student{
  constructor(fname,lname) {
      this.fname = fname
      this,lname = lname
  }
}
let student = new Student('John','Scott')
console.log(student.fname)

class Vehicle{
    constructor(name,type){
        this.name = name
        this.type = type
    }
}

class Car extends Vehicle{
    constructor(name,type){
        super(name,type)
    }
}
let car = new Car('Bugati','Sports')
console.log(car)