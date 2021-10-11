
var JSONObject = {
    "name":"Mayank",
    "age":21,
    "country":"India"
}
var data = {
    name:"Mayank",
    city:"Delhi",
    isAdmin:true
}
var JSONSStringyData = JSON.stringify(data)
console.log(JSONSStringyData)
var JSONParsedData = JSON.parse(JSONSStringyData)
console.log(JSONParsedData)