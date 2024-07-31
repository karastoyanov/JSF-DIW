//Write a program to compute the amount of hours between two given dates.

const d1 = Date.parse("2024-07-31");
const d2 = Date.parse("2024-06-01");

function hoursDiff(d1, d2) {
    if (d1 < d2) {
        return console.log(((d2 - d1) * 2.77778e-7).toFixed());
    } else {
        return console.log(((d1 - d2) * 2.77778e-7).toFixed());
    }
}
hoursDiff(d1, d2);