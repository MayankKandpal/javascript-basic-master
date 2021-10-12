try {
  var output = getMessage("Hello", "Mayank");
} catch (ex) {
  console.log(ex)
} finally {
  console.log("Finally block will get executed always");
}

//throw
try{
    throw{
         number:101,
         message:"Error Occured"
    } 
}
catch(ex){
    console.log(ex.number,ex.message)
}