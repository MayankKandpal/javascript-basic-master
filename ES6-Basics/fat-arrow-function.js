// var add = function(x,y){
//     return x+y
// }
var add = (x,y)=>{
    return x+y
}
var add1 =(x,y) =>x+y

console.log(add1(10,20))
let number =[4,2,5]

number.sort((a,b)=>b-a)
console.log(number)

let names = ['names','adam','tuan','uma']

// let length = names.map(function(name){
//     return name.length
// })

let length = names.map(name=>name.length)
console.log(length)

/*
var multiply1 =(x,y)
=>x*y   
!will give error 
*/

var multiply =(x,y)=>
x*y //will not give error

//dealing with object literals

let setColor = color =>({value:color})
let bgColor = setColor('Green')
console.log(bgColor)
