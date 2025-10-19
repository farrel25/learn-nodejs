// Core Module

// File System
const fs = require('fs');

// Write File Synchronously
// fs.writeFileSync('test.txt', 'Hello World Synchronously');
//
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World Synchronously');
// } catch (error) {
//     console.log(error);
// }



// Write File Asynchronously
// fs.writeFile('data/test.txt', 'Hello World Asynchronously', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }
// });





// Read File Synchronously
// const data1 = fs.readFileSync('data/test.txt'); // if the encoding option is not specified, it will return a buffer
// console.log(data1);
//
// const data2 = fs.readFileSync('data/test.txt');
// console.log(data2.toString());
//
// const data3 = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data3);



// Read File Asynchronously
// fs.readFile(
//     'data/test.txt',
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );





// Read Line
const readline = require('readline');

// readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })
//     .question(
//         'Enter your name: ',
//         (answer) => {
//             console.log(`Hello, ${answer}`);
//             process.exit();
//         }
//     );



// const rl = readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
// rl.question(
//     'Enter your name: ',
//     (answer) => {
//         console.log(`Hello, ${answer}`);
//         rl.close();
//     }
// );



// const rl = readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
// rl.question(
//     'Enter your name: ',
//     (answer) => {
//         // console.log(`Hello, ${answer}`);
//
//         rl.question(
//             'Enter your age: ',
//             (answerAge) => {
//                 console.log(`Thanks ${answer}, ${answerAge} years old`);
//                 rl.close();
//             }
//         );
//     }
// );





// Answer readLine question, then write to a JSON file (Synchronous)
// const rl = readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
// rl.question(
//     'Enter your name: ',
//     (name) => {
//
//         rl.question(
//             'Enter your phone number: ',
//             (phoneNumber) => {
//                 const contactRequest = {name, phoneNumber};
//                 let contacts;
//                 let existingContactsJsonString;
//
//                 try {
//                     existingContactsJsonString = fs.readFileSync('data/contact.json', {encoding: 'utf8'});
//                 } catch (error) {
//                     console.log("File doesn't exist");
//                 }
//
//                 if (existingContactsJsonString) {
//                     console.log(existingContactsJsonString);
//                     contacts = JSON.parse(existingContactsJsonString);
//                     contacts.push(contactRequest);
//                     console.log(contacts);
//                 } else {
//                     console.log('No existing contacts');
//                     contacts = [contactRequest];
//                 }
//
//                 try {
//                     fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
//                 } catch (error) {
//                     throw error;
//                 }
//
//                 console.log(`Thanks ${name}, your phone number ${phoneNumber} is saved to the JSON file`);
//
//                 rl.close();
//             }
//         );
//     }
// );





// Answer readLine question, then write to a JSON file (Asynchronous)
const rl = readline
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question(
    'Enter your name: ',
    (name) => {

        rl.question(
            'Enter your phone number: ',
            (phoneNumber) => {
                fs.readFile(
                    'data/contact.json',
                    {encoding: 'utf8'},
                    (err, data) => {
                        let contactRequest = {name, phoneNumber};
                        let contactsJson;

                        if (err) {
                            console.log("File doesn't exist");
                            contactsJson = [contactRequest];
                        } else {
                            if (data) {
                                contactsJson = JSON.parse(data);
                                contactsJson.push(contactRequest);
                            } else {
                                console.log('No existing contacts');
                                contactsJson = [contactRequest];
                            }
                        }

                        fs.writeFile(
                            'data/contact.json',
                            JSON.stringify(contactsJson),
                            (err) => {
                                if (err) throw err;
                                console.log('File written successfully');
                            }
                        );
                    }
                )

                console.log(`Thanks ${name}, your phone number ${phoneNumber} is saved to the JSON file`);

                rl.close();
            }
        );
    }
);