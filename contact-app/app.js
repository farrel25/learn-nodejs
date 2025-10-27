// const fs = require('fs');
// const readline = require('readline');
//
// const rl = readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
// // Create a data directory if it doesn't exist
// const dirPath = './data';
// if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
// }
//
// // Create a contact.json file if it doesn't exist
// const contactFilePath = './data/contacts.json';
// if (!fs.existsSync(contactFilePath)) {
//     fs.writeFileSync(contactFilePath, '[]', 'utf8');
// }
//
// // rl.question(
// //     'Enter your name: ',
// //     (name) => {
// //
// //         rl.question(
// //             'Enter your phone number: ',
// //             (phoneNumber) => {
// //                 const contactRequest = {name, phoneNumber};
// //                 let contacts;
// //                 let existingContactsJsonString;
// //
// //                 try {
// //                     existingContactsJsonString = fs.readFileSync(contactFilePath, {encoding: 'utf8'});
// //                 } catch (error) {
// //                     console.log("File doesn't exist");
// //                 }
// //
// //                 if (existingContactsJsonString) {
// //                     console.log(existingContactsJsonString);
// //                     contacts = JSON.parse(existingContactsJsonString);
// //                     contacts.push(contactRequest);
// //                     console.log(contacts);
// //                 } else {
// //                     console.log('No existing contacts');
// //                     contacts = [contactRequest];
// //                 }
// //
// //                 try {
// //                     fs.writeFileSync(contactFilePath, JSON.stringify(contacts));
// //                 } catch (error) {
// //                     throw error;
// //                 }
// //
// //                 console.log(`Thanks ${contactRequest.name}, your phone number ${contactRequest.phoneNumber} is saved to the JSON file`);
// //
// //                 rl.close();
// //             }
// //         );
// //     }
// // );
//
// const questions1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             'Enter your name: ',
//             (name) => {
//                 resolve(name);
//             }
//         );
//     });
// };
//
// const questions2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             'Enter your email: ',
//             (email) => resolve(email)
//         );
//     });
// };
//
// const questions3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             'Enter your phone number: ',
//             phoneNumber => resolve(phoneNumber)
//         );
//     });
// };
//
// const createQuestion = (question) => {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             question,
//             answer => resolve(answer)
//         );
//     });
// };





/*
* CONTACT APP PART 1
*/

// const contact = require('./contact.js');
// // const { createQuestion, saveContact } = require('./contact');
//
// const main = async () => {
//     // const name = await questions1();
//     // const email = await questions2();
//     // const phoneNumber = await questions3();
//
//     // const name = await createQuestion('Enter your name: ');
//     // const email = await createQuestion('Enter your email: ');
//     // const phoneNumber = await createQuestion('Enter your phone number: ');
//     //
//     // saveContact(name, email, phoneNumber);
//
//     const name = await contact.createQuestion('Enter your name: ');
//     const email = await contact.createQuestion('Enter your email: ');
//     const phoneNumber = await contact.createQuestion('Enter your phone number: ');
//
//     contact.saveContact(name, email, phoneNumber);
// }
//
// main();





/*
* CONTACT APP PART 2
*/
const yargs = require('yargs');
const contact = require('./contact.js');

// Take arguments from the command line
// console.log(process.argv);
// node app athaillah
// [
//   '/usr/local/bin/node',
//   '/Users/farrelputra/Workspace/wpu/learn-nodejs/contact-app/app',
//   'athaillah'
// ]
//
// console.log(process.argv[2]);
// node app athaillah
// athaillah



// console.log(yargs.argv);
// node app add --fullName="Farrel"
// { _: [ 'add' ], fullName: 'Farrel', '$0': 'app' }
//
// yargs.command(
//     'add',
//     'Add a new contact',
//     () => {},
//     (argv) => {
//         console.log(argv.fullName);
//     }
// );
//
// yargs.parse();



yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
        fullName: {
            describe: 'Full name of the contact',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email of the contact',
            demandOption: false,
            type: 'string'
        },
        phoneNumber: {
            describe: 'Phone number of the contact',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const contactRequest = {
            name: argv.fullName,
            email: argv.email,
            phoneNumber: argv.phoneNumber
        }
        console.log(contactRequest);
        contact.saveContact(contactRequest.name, contactRequest.email, contactRequest.phoneNumber);
    }
});

yargs.parse();

// node app add --fullName="Putra" --email="putra@domain.com" --phoneNumber="0822"