var fruits = ["Orange","Apple","Banana","Guava"]
var vegetables = ["Potato","Spinach","Brinjal","Pepper"]
var mix = fruits.concat(vegetables)
console.log(mix)
var movies = ["Avatar","Good Will Hunting","Vanilla Sky"]
console.log(movies)
var movieString =movies.join(",")//co
console.log(movieString)
console.log(movieString.split(","))//split method
var data = ["C#","JavaScript","Python","MSSQL"]
console.log(data.indexOf("C#"))

var array = [1,2,3]
var obj = {}
console.log(typeof array,typeof obj)

if(Array.isArray(array)){
    array[3]="somedata"
}
console.log(array)