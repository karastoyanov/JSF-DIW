/* Write a function to validate an e-mail address. Use a regular expression to
validate an email address format.
*/

let email = "hristomir.hristov@doitwise.com";

function extractNum(email) {
    const pattern = /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = email.match(pattern);
    if (result) {
       return console.log(`${email} is a valid email address.`);
    } else {
       return console.log(`${email} is not a valid email address.`);
    }
}
extractNum(email);