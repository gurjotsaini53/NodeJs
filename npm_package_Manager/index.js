import chalk from "chalk";
console.log(chalk.blue("Hello World"));

// import chalk from "chalk";

// console.log(chalk.blue.underline("Hello world!"));
// console.log(chalk.blue.underline("Hello world!"));
// console.log(chalk.red.inverse("Failed"));
// console.log(chalk.green.inverse("success"));
// console.log(chalk.red.bold("success"));

import validator from "validator";
// const res = validator.isEmail("gurjotsaini53@gmail.com");
const res = validator.isEmail("gurjotsaini53@com.com");
console.log(res);