/*
Write a function to validate a phone number in any of the following formats:
+359 88 8 123456
+359888123456
+359 88 812-3456
088 8 123456
0888 12-34-56
(088) 8123456
*/

function validatePhoneNum(num) {
    const pattern = /^[+(]?\d{3,4}[)]?\s?\d{1,2}\s?\d{1,2}[\s-]?\d{1,2}[\s-]?\d{1,4}$/gm;
    let result = pattern.test(num);
    if (result) {
        return console.log(`${num} is a valid phone number.`);
     } else {
        return console.log(`${num} is not a valid phone number.`);
     }
}
validatePhoneNum("0889-12-34-56");