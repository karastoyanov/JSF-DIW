/*Count the number of occurrences of each digit in the following text:
“19002288034”
Print in ascending order all numbers encountered in the string and the number of times
they occur in the text, separated with a colon character “:”.*/

let inputString = "19002288034";
let result = "";

result += inputString.includes("0") ? `0: ${inputString.split("0").length - 1}, ` : "";
result += inputString.includes("1") ? `1: ${inputString.split("1").length - 1}, ` : "";
result += inputString.includes("2") ? `2: ${inputString.split("2").length - 1}, ` : "";
result += inputString.includes("3") ? `3: ${inputString.split("3").length - 1}, ` : "";
result += inputString.includes("4") ? `4: ${inputString.split("4").length - 1}, ` : "";
result += inputString.includes("5") ? `5: ${inputString.split("5").length - 1}, ` : "";
result += inputString.includes("6") ? `6: ${inputString.split("6").length - 1}, ` : "";
result += inputString.includes("7") ? `7: ${inputString.split("7").length - 1}, ` : "";
result += inputString.includes("8") ? `8: ${inputString.split("8").length - 1}, ` : "";
result += inputString.includes("9") ? `9: ${inputString.split("9").length - 1}` : "";

console.log(result);