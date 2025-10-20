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

const contact = require('./contact.js');
// const { createQuestion, saveContact } = require('./contact');

const main = async () => {
    // const name = await questions1();
    // const email = await questions2();
    // const phoneNumber = await questions3();

    // const name = await createQuestion('Enter your name: ');
    // const email = await createQuestion('Enter your email: ');
    // const phoneNumber = await createQuestion('Enter your phone number: ');
    //
    // saveContact(name, email, phoneNumber);

    const name = await contact.createQuestion('Enter your name: ');
    const email = await contact.createQuestion('Enter your email: ');
    const phoneNumber = await contact.createQuestion('Enter your phone number: ');

    contact.saveContact(name, email, phoneNumber);
}

main();