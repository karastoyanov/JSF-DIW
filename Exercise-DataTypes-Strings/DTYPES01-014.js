/*: Define a string variable with the following text (called pangram):
The quick brown fox jumps over the lazy dog
Use positive indexing to print on the console the character “b”.
Use negative indexing to print on the console the character “s”*/

let pangram = `The quick brown fox jumps over the lazy dog`
let positive = pangram.charAt(10)
let negative = pangram.at(-19) // charAt samo za polozhitelni values

console.log(`${positive}\n${negative}`)

