/* BASICS01-002: Imagine, you are solving a math problem. Declare ten variables, which you might need in your program.

     The math problem to solve:
         We need to calculate the perimeters of a circle, rectangle and triangle and sum those perimeters.*/


const pi; 
let r;                                       // radius of the circle
let P1 = 2 * pi * r ;                        // perimeter of the circle 
let x1;                                      // lenght of the rectangle
let x2;                                      // breadth
let P2 = 2 * x1 + 2 * x2;                    // perimeter of the rectangle 
let y1;                                      // side of the triangle
let y2 = y1;                                 // the second side of the triangle
let c;                                       // base of the triangle 
let P3 = 2 * y1 + c;                         // perimeter of the triangle
let P4 = P1 + P2 + P3;                       // sum of the all perimeters