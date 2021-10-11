function greet(message){
    return function(name){
        return function(age){
            console.log(message+" "+name+" "+age)
        }
    }
}

var wish = greet("Hello")("Mayank")("12")
// var sayhello = wish('Mayank')
// var a = sayhello(12)
// var sayhello1 = wish("Rahul")
// console.log(wish)