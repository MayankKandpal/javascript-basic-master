var person = {};
person.firstname = "Adam";
person.lastname = "Colson";
person.fullname = "Adam Colson";
person.address = {};
person.address.street = "1st Street";
person.address.city = "New Delhi";
console.log(person);

var student = {
  firstname: "Susan",
  lastname: "White",
  fullname: "Susan White",
  address: {
    street: "2nd Street",
    city: "Boston",
  },
  getfullname:function(){
      console.log(this.fullname)
  }
}
console.log(student.getfullname())
