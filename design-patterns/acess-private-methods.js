var Module = (function () {
  //locally scoped object
  var myObject = {};
  var privateMethod = function (message) {
    console.log(message);
  };

  var publicMethod = function (text) {
    privateMethod(text);
  };

  return {
    publicMethod: publicMethod,
  };
  return myObject;
})();
console.log(Module.publicMethod("This message is for you"))