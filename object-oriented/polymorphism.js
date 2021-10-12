function Shape(){

}

Shape.prototype.draw = function(){
    return "I am a generic shape"
}

//circle

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am circle"
}
var shape = new Shape()
console.log(shape.draw())
var circle = new Circle()
console.log(circle.draw())
