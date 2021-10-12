var Module = (function () {
  var privateMethod = function () {
    console.log("This is private method");
  };
  return{
      name:"Hello",
      publicMethod:function(){
          console.log('Public Method')
      }
  }
})()

console.log(Module)