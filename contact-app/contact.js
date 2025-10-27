const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
// const readline = require('readline');

// const rl = readline
//     .createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

// Create a data directory if it doesn't exist
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Create a contact.json file if it doesn't exist
const contactFilePath = dirPath + '/contacts.json';
if (!fs.existsSync(contactFilePath)) {
    fs.writeFileSync(contactFilePath, '[]', 'utf8');
}

// const createQuestion = (question) => {
//     return new Promise((resolve, reject) => {
//         rl.question(
//             question,
//             answer => resolve(answer)
//         );
//     });
// };

const saveContact = (name, email, phoneNumber) => {
    const contactRequest = {name, email, phoneNumber};

    // Validate the email
    if (contactRequest.email) {
        const emailValid = validator.isEmail(contactRequest.email);
        if (!emailValid) {
            console.log(chalk.bgRed.white.bold('Email is not valid. Please enter a valid email.'));
            return false;
        }
    }

    const mobilePhoneValid = validator.isMobilePhone(contactRequest.phoneNumber, 'id-ID');
    if (!mobilePhoneValid) {
        console.log(chalk.bgRed.white.bold('Phone number is not valid. Please enter a valid phone number.'));
        return false;
    }

    let contacts;
    let existingContactsJsonString;

    try {
        existingContactsJsonString = fs.readFileSync(contactFilePath, {encoding: 'utf8'});
    } catch (error) {
        console.log("File doesn't exist");
    }

    if (existingContactsJsonString) {
        contacts = JSON.parse(existingContactsJsonString);

        // Check if the name already exists in the contacts array
        const nameExists = contacts.find(contact => contact.name === contactRequest.name);

        if (nameExists) {
            console.log(chalk.bgRed.white.bold('Name already exists in the Contacts. Please enter a different name.'));
            return false;
        }

        // Add the new contact to the contacts array
        contacts.push(contactRequest);

    } else {
        console.log('No existing contacts');
        contacts = [contactRequest];
    }

    try {
        fs.writeFileSync(contactFilePath, JSON.stringify(contacts));
    } catch (error) {
        throw error;
    }

    console.log(chalk`{bgGreen.black.bold Thanks ${contactRequest.name}, your contact is saved to the JSON file}`);

    // rl.close();
}

// module.exports = { createQuestion, saveContact };
module.exports = { saveContact };