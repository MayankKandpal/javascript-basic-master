/*
*Undefined-Special value and data type in Javascript 
! Never declare a variable as undefined because it is difficult
! to find out if the value is 'undefined' because we set it ot JS set it for us
*/
var a ;
console.log(a)
if(a === undefined){
    console.log('a is undefined')
}
else{
    console.log('a is defined')
}
function sample(){
    console.log("hello sample")
}
sample()
console.log(data)   /*gives undefined*/
var data = "Who is Johngalt?"
console.log(data)