/*BASICS03-021: Are there any not correctly defined expressions in the following excerpt? If 
any – which one(s)? Why?
*/

let a1 = 1;             //OK
let b1 = a;             //OK
let r1 = a+--b;         //OK
let r2 = a+++b;         //OK
let r3 = a---b;         //OK
let r4 = a-++b;         //OK
let r5 = a*++b;         //OK         
let r6 = a*--b;         //OK            
let r7 = a**++b*b;      //OK
let r8 = a**++b  //b;   //OK