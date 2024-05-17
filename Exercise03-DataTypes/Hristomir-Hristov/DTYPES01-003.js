/*

Declare two variables. Initialize one of them with your first name and the
other one – with your family name. Define a variable called fullRevName with a
template string. Use variable substitution for the two simple names, having the family
name as a first name. Use comma character as a separator. Print fullRevName on the
console.

*/


let firstName;
let lastName;

firstName = 'Hristomir';
lastName = 'Hristov';

let fullRevName = `${lastName}, ${firstName}`;

console.log(fullRevName);