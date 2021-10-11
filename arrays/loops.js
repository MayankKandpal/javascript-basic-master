var items1 = ["car", "bike", "scooter", "cycle", "jeep", "yacht", "plane"];
for (var i = 0; i < items1.length; i++) {
  console.log(items1[i]);
}

items1.forEach(function(item,index){
    console.log(index,item)
})
var mapData = items1.map(function(item,index){
    return index+" "+item
})

console.log(mapData)

//4th way for-in

var items = ["mayank","suraj","adam","tula"]
for(item in items){
console.log(items[item])
}

//5th wat for of
for(item of items){
console.log(item)
}