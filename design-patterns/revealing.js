/*
? Revealing Module Pattern
*/
var Module = (function(){
    //locally scoped object
    var myObject ={}
    var privateMethod = function(){

    }
    
    var someMethod = function(){

    }

    return{
        a:someMethod
    }
    return myObject
})()

console.log(Module)