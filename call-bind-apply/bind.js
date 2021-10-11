var person1 = {
  firstname: "Mayank",
  lastname: "Kandpal",
};

var person2 = {
  firstname: "Rohan",
  lastname: "Verma",
};

function getname(message, city) {
  return (
    message + " " + this.firstname + " " + this.lastname + " Welcome to " + city
  );
}

var getFullNameUsingBind = getname.bind(person2);
console.log(getFullNameUsingBind("Hi","Jabalpur"));

var getFullNameUsingCall = getname.call(person1,'Hi',"Delhi");
console.log(getFullNameUsingCall);
var getFullNameUsingApply = getname.apply(person1,["Hi","Mumbai"]);
console.log(getFullNameUsingApply);
