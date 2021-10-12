var singelton =(function(){

    var instance = null
    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object has been created')
        return obj
    }
    var getInstance = function(){
        if(!instance){
            instance = createInstance()
        }
        return instance
    }
    return{
        getInstance:getInstance
    }
})()
console.log(singelton)
console.log(singelton.getInstance())
console.log(singelton.getInstance())
console.log(singelton.getInstance())
// function Student(){
//     console.log('New Instance Created')
// }

// var student1 = new Student()