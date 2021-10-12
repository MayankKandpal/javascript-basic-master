const odd = [1,3,5]
const combined = [2,4,6,...odd]
console.log(combined)

function display(a,b,...args){
    console.log(a,b,args)
}
display(1,2,3,45,6)

//concatenate arrays

let number =[1,2]
let moreNumbers =[3,4]
let allNumbers = [...number,...moreNumbers]
console.log(allNumbers)

let charac = ['A',...'BSE','K']
console.log(charac)