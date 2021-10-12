// //multiply(2)(3)(4)

// var a =10 //because a,b is primitive type and its value type hence the value is copied
// var b = a
// a =20
// console.log(a,b)

// var x =[1,2] //because array is an object and is reference type
// var y =x
// x.push(3)
// console.log(x,y)

// var m = [1,2]
// var n = m
// m =[1,2,3]     //value of n would not change because we have pointed m to a new reference now
// console.log(m,n)
// var name = 1+2+"ma"+3+4
// console.log(name)
// console.clear()
// var output = (function(x){
//   delete x; //delete is used to delete property from an object hence x can not be deleted
//   return x;
// })(0)
// console.log(output)

// var array =['a','b','c','d','e','f']
// array.splice(0,a.length)

// function evenOrOdd(value){
//    return value%2==0
// }
// console.log(evenOrOdd(4))
// console.clear()

// function arraySum(arr){
//     var result
//     for(a of arr){
//         result +=a
//     }
//     return result
// }

// console.log(arraySum[1,2,4])
// var userData = [
//     {name: "Scott", age: 45, city:'boston'},
//     {name: "Adam", age: 43},
//     {name: "Taun", age: 42},
// ]
console.log(["a", "b", "c"].concat(["d", "e", "f"]))

var a = new Date()
console.log(a)