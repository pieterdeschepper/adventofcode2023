const fs = require('fs');

const values = fs.readFileSync('input.txt').toString().split("\n");
let total = 0;
for (i = 0; i < values.length; i++) {
    let firstDigit = values[i].replace(/^[\D]*([\d]{1}).*$/, '$1');
    let lastDigit = values[i].replace(/^.*([\d]{1})[\D]*$/, '$1');
    total += parseInt(firstDigit + lastDigit);
}

console.log(total);