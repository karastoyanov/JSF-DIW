// Write a function to validate an IP v.4 address.

function validateIP(ip) {
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    let result = pattern.test(ip);
    if (result) {
        return console.log(`${ip} is a valid IPv4 address.`);
     } else {
        return console.log(`${ip} is not a valid IPv4 address.`);
     }
}
validateIP('192.168.1.254');