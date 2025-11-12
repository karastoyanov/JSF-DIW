/*
BASICS03-022: You have the following excerpt of a JavaScript code:
let a = 1;
let b = 3;
let result = a**++b/b++**a;
Try to calculate the value of the result variable, without executing the code

Left side: a ** (++b)

++b -> increase b first, are use it

b goes from 3 to 4

Calculate 1 ** 4 = 1

Right side: (b++) ** a

b++ -> use b first, then increase it

Now b = 4

After that, b becomes 5

Calculate 4 ** 1 = 4

Division:

Left side = 1

Right side = 4

Result = 1 / 4 = 0.25
*/