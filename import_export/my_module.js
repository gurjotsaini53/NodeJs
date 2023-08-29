// in node js every individual file is called a modules

const add = (a, b) => {
  return a + b;
};

const name = "Gurjot";

module.exports = {add,name}; // mutliple export
// module.exports = add ;  // single export


module.exports.add = add; 
module.exports.name = name;
