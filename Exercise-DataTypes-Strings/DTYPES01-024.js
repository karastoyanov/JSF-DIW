/*Count thee number of occurrences of each digit in the following text:
“193817588”
Print in ascending order all numbers from 0 to 9 and the number of times they occur in
the text, separated with a comma*/


let inputString = "193817588";
let result = "";

result += (inputString.includes("0") ? `0 = shows up ${inputString.split("0").length - 1} times, ` : "");
result += (inputString.includes("1") ? `1 = shows up ${inputString.split("1").length - 1} times, ` : "");
result += (inputString.includes("2") ? `2 = shows up ${inputString.split("2").length - 1} times, ` : "");
result += (inputString.includes("3") ? `3 = shows up ${inputString.split("3").length - 1} times, ` : "");
result += (inputString.includes("4") ? `4 = shows up ${inputString.split("4").length - 1} times, ` : "");
result += (inputString.includes("5") ? `5 = shows up ${inputString.split("5").length - 1} times, ` : "");
result += (inputString.includes("6") ? `6 = shows up ${inputString.split("6").length - 1} times, ` : "");
result += (inputString.includes("7") ? `7 = shows up ${inputString.split("7").length - 1} times, ` : "");
result += (inputString.includes("8") ? `8 = shows up ${inputString.split("8").length - 1} times, ` : "");
result += (inputString.includes("9") ? `9 = shows up ${inputString.split("9").length - 1} times` : "");

console.log(result);