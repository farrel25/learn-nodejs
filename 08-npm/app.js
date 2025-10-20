
// to initialize the package.json file
// npm init

// to install a package
// npm install <package-name>
// npm i <package-name>
// npm i validator
// npm i validator@13.15.15

// to uninstall a package
// npm uninstall <package-name>
// npm un <package-name>

// https://www.npmjs.com/package/nodemon


const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('farrel@gmail.com'));
console.log(validator.isMobilePhone('082112341234', 'id-ID'));
console.log(validator.isMobilePhone('072112341234', 'id-ID'));
console.log(validator.isMobilePhone('82112341234', 'id-ID'));
console.log(validator.isMobilePhone('08211234', 'id-ID'));
console.log(validator.isNumeric('08211234'));
console.log(validator.isNumeric('08211234a'));

console.log(chalk.blue('Hello world!'));
console.log(chalk.bgBlue('Hello world!'));
console.log(chalk.black.bgRed.bold.underline.italic('Hello world!'));

const name = 'farrel';
const message = chalk`lorem ipsum dolor {bgYellow.black sit amet}, consectetur {bgGreen.italic.black adipiscing elit}. my name is ${name}`;
console.log(message);