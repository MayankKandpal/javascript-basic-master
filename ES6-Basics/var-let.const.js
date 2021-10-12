function sample(){
    var foo = 'blue'
    console.log(foo)
}
sample()

if(true){
    var foo = "Hello"
    let bar = "How are you"
    const baz = "I am fine"

    console.log(foo)
    console.log(bar)
    console.log(baz)
}
// console.log(foo)
//     console.log(bar)
//     console.log(baz)

function getData(){
    var a = 10
    let b = 20
    const c = 30

    if(true){
        console.log(a)
        console.log(b)
        console.log(c)
        var value1 = "Scoot"
        let value2 = "Adam"
        const value3 = "Tuan"
    }
    // console.log(value1)
    // console.log(value2)
    // console.log(value3)
}
getData()
function Test(){
    let foo = 1;
    foo =10;
    // let foo=2; reassigning is possible but redefining is not possible
}
var a =10;
var a= 20;


