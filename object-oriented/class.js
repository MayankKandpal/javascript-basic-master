function Student(){

}

function Person(){

}
//instance of class
var person1 = new Person();
var person2 = new Person();

//constructor
function Order(){
console.log('Order Initiated')
}

var order1 = new Order()//order is constructor

//properties

function Customer(gender){
    this.gender = gender 
}

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')

console.log(customer1)
console.log(customer2)
