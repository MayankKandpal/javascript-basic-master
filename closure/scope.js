var person = {
    firstname:'Mayank',
    lastname:'Kandpal',
    city:'New Delhi'
}

person.firstname = 'Scott'
person.age = 21
delete person.age
console.log(person)

var preventExtensions = {
    name:"Mayank",
    city:'Delhi',
    age:21
}

Object.preventExtensions(preventExtensions)

delete preventExtensions.age
console.log(preventExtensions)

var sealObj = {
    name:"Rohan",
    city:'Raipur',
    age:22
}

Object.seal(sealObj)
delete sealObj.age
console.log(sealObj)

