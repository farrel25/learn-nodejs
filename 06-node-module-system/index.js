// const fs = require("fs"); // core module
// const printName = require("./try"); // local module
// const moment = require("moment"); // 3rd party module / npm module . will be installed in node_modules folder

const tryModule = require("./try"); // local module

const firstName = "Farrel";

// console.log(tryModule);
console.log(tryModule.printName(firstName), tryModule.PI, tryModule.student.printStudentInfoV4(), new tryModule.Person());