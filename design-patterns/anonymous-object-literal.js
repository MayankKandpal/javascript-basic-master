/*
?anonymous object literal
*/

var Module = (function () {
  var privateMethod = function () {
    console.log("This is private method");
  };
  return {
    publicMethodOne: function () {
      console.log("THis is public method one");
    },
  };
})();

console.log(Module.publicMethodOne);
