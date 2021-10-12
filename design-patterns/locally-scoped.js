var Module = (function(){
    //locally scoped object
    var myObject ={}
    var privateMethod = function(){

    }
    myObject.PublicMethod = function(){
    return "This is public method"
    }
    return myObject
})()

console.log(Module.PublicMethod())