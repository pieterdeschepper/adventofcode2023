const fs = require('fs');

const values = fs.readFileSync('input.txt').toString().split("\n");
let total = 0;

let map = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}
for (i = 0; i < values.length; i++) {
    let firstDigit = values[i].replace(/^.*?(one|two|three|four|five|six|seven|eight|nine|zero|\d).*$/, '$1');
    let lastDigit = values[i].replace(/^.*(one|two|three|four|five|six|seven|eight|nine|zero|\d).*$/, '$1');
    firstDigit = isNaN(firstDigit) ? map[firstDigit] : firstDigit;
    lastDigit = isNaN(lastDigit) ? map[lastDigit] : lastDigit;
    total += parseInt(firstDigit + lastDigit);
}

console.log(total);