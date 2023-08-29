(function (exports, require, module, __filename, __dirname) {
  const name = "Gurjot";
  console.log(name);
  module.exports = name;
});

// automatically node make a module wrapper function
// in which data is protected and cannot be accessed outside

// bonus

(function () {
  var a = "vinod";
  console.log(a);
})();

// console.log(a); // cannot accessed
