// DTYPES01-002: Declare two variables. Initialize one of them with your first name and the
// other one – with your last name. Define a variable called fullName with a template
// string. Use variable substitution for the two simple names and use a space character as
// a separator. Print fullName on the console.


let nameFirts;
let nameLast;

nameFirts = 'Iva';
nameLast =  'Georgieva';

let fullName = `${nameFirts} ${nameLast}`;

console.log(fullName);