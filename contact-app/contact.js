const fs = require('fs');
const readline = require('readline');

const rl = readline
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

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

const createQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(
            question,
            answer => resolve(answer)
        );
    });
};

const saveContact = (name, email, phoneNumber) => {
    const contactRequest = {name, email, phoneNumber};

    let contacts;
    let existingContactsJsonString;

    try {
        existingContactsJsonString = fs.readFileSync(contactFilePath, {encoding: 'utf8'});
    } catch (error) {
        console.log("File doesn't exist");
    }

    if (existingContactsJsonString) {
        contacts = JSON.parse(existingContactsJsonString);
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

    console.log(`Thanks ${contactRequest.name}, your contact is saved to the JSON file`);

    rl.close();
}

module.exports = { createQuestion, saveContact };