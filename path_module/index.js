const path = require("path");
console.log(path.dirname("C:/Users/gurjo/Desktop/NodeJs/path_module/index.js")); // dirname
console.log(path.extname("C:/Users/gurjo/Desktop/NodeJs/path_module/index.js")); // file extension name
console.log(
  path.basename("C:/Users/gurjo/Desktop/NodeJs/path_module/index.js")
); // file name


const my_path  = path.parse('C:/Users/gurjo/Desktop/NodeJs/path_module/index.js');
console.log(my_path);
console.log(my_path.name);
console.log(my_path.root);
