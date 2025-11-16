let x = 7;      // x + y, x + z 
let y = 42;     // y + x, y + z   } --> unique x + y, x + z, y + z
let z = 33;     // z + x, z + y

let checkSum = (x + y > x + z && x + y > y + z) ? console.log(x, "and", y, "have the biggest sum.") : ((x + z > y + z) ? console.log(x, "and", z, "have the biggest sum.") : console.log(y, "and", z, "have the biggest sum."));