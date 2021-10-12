// function say(message){
//     message = typeof message !=='undefined'? message:'hi'
//     console.log(message)
// }

function say(message='Hi'){ //in ES6 default parameter can be assigned in paranthesis
    console.log(message)
}
say() //undefined
