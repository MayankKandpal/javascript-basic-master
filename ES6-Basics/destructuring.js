let arr = ['Scott','Adam','Tuan']
let [first,second,third] =arr;

console.log(first)
console.log(second)
console.log(third)


let[fname,lname] = 'Mayank Kandpal'.split(" ")
console.log(fname,lname)

//object destructuring
let user =  {
    name:"John",
    age:30
}

let options = {
    width:100,
    length:200,
     
}

 let{width,length } =options
 console.log(width,length)